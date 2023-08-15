import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const formdefData = location.state.formdef_data;

  const [phoneData, setPhoneData] = useState({
    _id: formdefData._id,
    phone_name: formdefData.phone_name,
    brand: formdefData.brand,
    release_year: formdefData.release_year,
    storage: formdefData.storage,
    memory: formdefData.memory,
    camera: formdefData.camera,
    screen_size: formdefData.screen_size,
    img_url: formdefData.img_url,
    price: formdefData.price,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (!formSubmitted) {
      setPhoneData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    const phoneId = phoneData._id;
    const updatedData = { ...phoneData };
    delete updatedData._id;

    axios
      .put(`http://localhost:4000/api/phones/${phoneId}`, updatedData)
      .then((response) => {
        navigate("/");
        window.location.reload(false);
        console.log("Phone updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating phone:", error);
      });
  };

  return (
    <div className="form-add-phone">
      <form onSubmit={handleFormSubmit}>
        <input
          type="hidden"
          name="_id"
          value={phoneData._id}
          onChange={handleInputChange}
        />
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
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
