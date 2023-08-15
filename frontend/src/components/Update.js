import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();

  const [phoneData, setPhoneData] = useState({
    _id: '',
    phone_name: '',
    brand: '',
    release_year: '',
    storage: '',
    memory: '',
    camera: '',
    screen_size: '',
    img_url: '',
    price: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // useEffect(() => {
  //   fetchPhoneData();
  // }, []);

  // const fetchPhoneData = () => {
  //   axios
  //     .get(`http://localhost:4000/api/phones/${id}`)
  //     .then((response) => {
  //       setPhoneData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching phone data:', error);
  //     });
  // };

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
        console.log('Phone updated:', response.data);
      })
      .catch((error) => {
        console.error('Error updating phone:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="hidden" name="_id" value={phoneData._id} onChange={handleInputChange} />
        <span>Phone name</span>
        <input type="text" name="phone_name" value={phoneData.phone_name} onChange={handleInputChange} /><br />
        <span>Phone brand</span>
        <input type="text" name="brand" value={phoneData.brand} onChange={handleInputChange} /><br />
        <span>Year of release</span>
        <input type="text" name="release_year" value={phoneData.release_year} onChange={handleInputChange} /><br />
        <span>Storage in GB</span>
        <input type="text" name="storage" value={phoneData.storage} onChange={handleInputChange} /><br />
        <span>Memory in GB</span>
        <input type="text" name="memory" value={phoneData.memory} onChange={handleInputChange} /><br />
        <span>Camera MegaPixels</span>
        <input type="text" name="camera" value={phoneData.camera} onChange={handleInputChange} /><br />
        <span>Screen size in Inches</span>
        <input type="text" name="screen_size" value={phoneData.screen_size} onChange={handleInputChange} /><br />
        <span>Image source URL</span>
        <input type="text" name="img_url" value={phoneData.img_url} onChange={handleInputChange} /><br />
        <span>Price</span>
        <input type="text" name="price" value={phoneData.price} onChange={handleInputChange} /><br />
        <button className="submit" type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;

  
