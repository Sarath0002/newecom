import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bnavbar from "./ecommerceproject/navbar/Bnavbar";
import { Register } from "./ecommerceproject/registerpage/Register";
import { Loginform } from "./ecommerceproject/registerpage/Loginform";
import Profile from "./ecommerceproject/Profile";
import Singleproduct from "./ecommerceproject/datasfile/Singleproduct";
import Dummy from "./ecommerceproject/Dummy";
import Searchfild from "./ecommerceproject/Searchfild";
import Bynow from "./ecommerceproject/Bynow";
import Dashabord from "./ecommerceproject/dashbord/Dashabord";
import Slidedata from "./ecommerceproject/Slidedata";
import Dashview from "./ecommerceproject/Dashview";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/b" element={<Bnavbar />}></Route>
          <Route path="/" element={<Register />}></Route>
          <Route path="/login" element={<Loginform />}></Route>
          <Route path="/dashbord" element={<Dashabord />}></Route>
          {/* <Route path="/datafile" element={<Datafiles />}></Route> */}
          <Route path="/prof" element={<Profile />}></Route>

          <Route
            path="/product/:product_id"
            element={<Singleproduct />}
          ></Route>
          {/* .............................TV..................... */}
          <Route
            path="/tv"
            element={
              <Slidedata
                values={
                  "Electronics|HomeTheater,TV&Video|Televisions|SmartTelevisions"
                }
              />
            }
          ></Route>
          {/* .............................MOBILES..................... */}
          <Route
            path="/mobiles"
            element={
              <Slidedata
                values={
                  "Electronics|Mobiles&Accessories|Smartphones&BasicMobiles|Smartphones"
                }
              />
            }
          ></Route>
          {/* .............................REMOTES..................... */}
          <Route
            path="/remotes"
            element={
              <Slidedata
                values={
                  "Electronics|HomeTheater,TV&Video|Accessories|RemoteControls"
                }
              />
            }
          ></Route>
          {/* .............................MIXIEE..................... */}
          <Route
            path="/mixergrinders"
            element={
              <Slidedata
                values={
                  "Home&Kitchen|Kitchen&HomeAppliances|SmallKitchenAppliances|MixerGrinders"
                }
              />
            }
          ></Route>
          {/* .............................HEADPHONES..................... */}
          <Route
            path="/headphones"
            element={
              <Slidedata
                values={
                  "Electronics|Headphones,Earbuds&Accessories|Headphones|In-Ear"
                }
              />
            }
          ></Route>
          {/* .............................SMARTWATCH..................... */}
          <Route
            path="/smartwatches"
            element={
              <Slidedata
                values={"Electronics|WearableTechnology|SmartWatches"}
              />
            }
          ></Route>
          {/* .............................HOMEAPLIENCE..................... */}
          <Route
            path="/homeappliances"
            element={
              <Slidedata
                values={
                  "Home&Kitchen|Kitchen&HomeAppliances|Vacuum,Cleaning&Ironing|Irons,Steamers&Accessories|Irons|DryIrons"
                }
              />
            }
          ></Route>
          {/* .............................USB CABLE..................... */}
          <Route
            path="/usb"
            element={
              <Slidedata
                values={
                  "Computers&Accessories|Accessories&Peripherals|Cables&Accessories|Cables|USBCables"
                }
              />
            }
          ></Route>
          <Route path="/dash" element={<Dashview />}></Route>
          {/* <Route path="/carts" element={<Cart />}></Route> */}
          <Route path="/cart" element={<Dummy />}></Route>
          <Route path="/search" element={<Searchfild />}></Route>
          <Route path="/bynow" element={<Bynow />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
