import React, { useState } from 'react';

const AddEdit = (props) =>{
  const {selected} = props;
  const [phone_name,setPhoneName] = useState('')
  const [brand,setBrand] = useState('')
  const [release_year,setReleaseYear] = useState('')
  const [storage,setStorage] = useState('')
  const [memory,setMemory] = useState('')
  const [camera,setCamera] = useState('')
  const [screen_size,setScreenSize] = useState('')
  const [img_url,setImgURL] = useState('')
  const [price,setPrice] = useState('')
  if(selected){
    setPhoneName(selected.phone_name);
    setBrand(selected.brand);
    setReleaseYear(selected.release_year);
    setStorage(selected.storage);
    setMemory(selected.memory);
    setCamera(selected.camera);
    setScreenSize(selected.screen_size);
    setImgURL(selected.img_url);
    setPrice(selected.price);
  }

  return (
    <div>
      <span>Phone name</span>
      <input type="text">{phone_name}</input><br />
      <span>Phone brand</span>
      <input type="text">{brand}</input><br/>
      <span>Year of release</span>
      <input type="text">{release_year}</input><br/>
      <span>Storage in GB</span>
      <input type="text">{storage}</input><br/>
      <span>Memory in GB</span>
      <input type="text">{memory}</input><br/>
      <span>Camera MegaPixels</span>
      <input type="text">{camera}</input><br/>
      <span>Screen size in Inches</span>
      <input type="text">{screen_size}</input><br/>
      <span>Image source URL</span>
      <input type="text">{img_url}</input><br/>
      <span>Price</span>
      <input type="text">{price}</input><br/>
      <button className="submit" >Confirm?</button>
    </div>
  )
}

export default AddEdit;