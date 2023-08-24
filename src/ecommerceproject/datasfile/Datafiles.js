import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "../datasfile/datafile.css";
import { useNavigate, useParams } from "react-router-dom";
import Navbars from "../navbar/Navbars";

const Datafiles = () => {
  const [data, setdata] = useState([]);

  const { product_id } = useParams();
  const Api = `http://localhost:3000/Products?product=${product_id}`;

  useEffect(() => {
    axios.get(`${Api}`).then((r) => {
      console.log(r.data);
      setdata(r.data);
    });
  }, []);
  const navigate = useNavigate();

  return (
    <>
      <div className="carddiv">
        {data.map((e) => {
          return (
            <div
              className="carddi cursor-pointer border-radius-9"
              role="button"
              onClick={() => navigate(`/product/${e.product_id}`)}
            >
              <Card className="mt-4 " roll="button" style={{ width: "24rem" }}>
                <Card.Img variant="top" src={e.img_link} />
                <Card.Body>
                  <Card.Title>{e.product_name}</Card.Title>
                  <Card.Text>{e.review_title}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    discounted price:{e.discounted_price}
                  </ListGroup.Item>
                  <ListGroup.Item>actual price:{e.actual_price}</ListGroup.Item>
                  <ListGroup.Item>
                    discount percentage:{e.discount_percentage}
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <div className="btnes">
                    <Button variant="success">Add to cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Datafiles;
