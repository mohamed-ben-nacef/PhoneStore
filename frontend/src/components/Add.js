import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {
  const navigate = useNavigate();
  const [phoneData, setPhoneData] = useState({
    phone_name: "",
    brand: "",
    release_year: "",
    storage: "",
    memory: "",
    camera: "",
    screen_size: "",
    img_url: "",
    price: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPhoneData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/api/phones", phoneData)
      .then((response) => {
        console.log("Phone added:", response.data);
        navigate("/");
        window.location.reload(false);
      })
      .catch((error) => {
        console.error("Error adding phone:", error);
      });
  };

  return (
    <div className="form-add-phone">
      <form onSubmit={handleSubmit}>
        <div className="col-25">
          <span>Phone name : </span>
        </div>
        <div className="col-75">
          <input
            type="text"
            name="phone_name"
            value={phoneData.phone_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-25">
          <span>Phone brand : </span>
        </div>
        <div className="col-75">
          <input
            type="text"
            name="brand"
            value={phoneData.brand}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-25">
          <span>Year of release : </span>
        </div>
        <div className="col-75">
          <input
            type="text"
            name="release_year"
            value={phoneData.release_year}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-25">
          <span>Storage in GB : </span>
        </div>
        <div className="col-75">
          <input
            type="text"
            name="storage"
            value={phoneData.storage}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-25">
          <span>Memory in GB : </span>
        </div>
        <div className="col-75">
          <input
            type="text"
            name="memory"
            value={phoneData.memory}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-25">
          <span>Camera MegaPixels : </span>
        </div>
        <div className="col-75">
          <input
            type="text"
            name="camera"
            value={phoneData.camera}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-25">
          <span>Screen size in Inches : </span>
        </div>
        <div className="col-75">
          <input
            type="text"
            name="screen_size"
            value={phoneData.screen_size}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-25">
          <span>Image source URL : </span>
        </div>
        <div className="col-75">
          <input
            type="text"
            name="img_url"
            value={phoneData.img_url}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-25">
          <span>Price : </span>
        </div>
        <div className="col-75">
          <input
            type="text"
            name="price"
            value={phoneData.price}
            onChange={handleInputChange}
          />
        </div>
        <button className="submit" type="submit">
          Confirm?
        </button>
      </form>
    </div>
  );
};
export default Add;
