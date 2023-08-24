import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [data, setdata] = useState([]);
  const addToCart = (data) => {
    axios
      .post("http://localhost:3000/product", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateqnty = (data) => {
    data.quantity = data.quantity + 1;
    axios
      .put(`http://localhost:3000/cart/${data.id}`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const checkcart = (product) => {
    let data = {
      id: product.product_id,
      name: product.product_name,
      image: product.img_link,
      actual_price: product.actual_price,
      discounted_price: product.discounted_price,
      discount_percentage: product.discount_percentage,

      quantity: 1,
    };
    axios
      .get(`http://localhost:3000/cart/${product.product_id}`)
      .then((res) => {
        updateqnty(res.data);
      })
      .catch((err) => {
        console.log(err);
        addToCart(data);
      });
  };
  const remove = (product_id) => {
    axios
      .delete(`http://localhost:3000/cart/${product_id}`)
      .then((res) => {
        console.log("deleted", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products`)
      .then((res) => {
        setdata(res.data);
      })
      .catch(() => {
        setdata([]);
      });
  }, []);

  return (
    <>
      {data.map((e) => {
        return (
          <div>
            <p>{e.product_id}</p>
            <Link to={`/datafile/${e.product_id}`}>{e.product_name}</Link>
            <button onClick={() => checkcart(e)}>addtocart</button>
            <button onClick={() => remove(e.product_id)}>remove</button>
          </div>
        );
      })}
    </>
  );
};

export default Cart;
