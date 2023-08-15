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

  return (
    <div>
      <span>Phone name</span>
      <input type="text"></input><br />
      <span>Phone brand</span>
      <input type="text"></input><br/>
      <span>Year of release</span>
      <input type="text"></input><br/>
      <span>Storage in GB</span>
      <input type="text"></input><br/>
      <span>Memory in GB</span>
      <input type="text"></input><br/>
      <span>Camera MegaPixels</span>
      <input type="text"></input><br/>
      <span>Screen size in Inches</span>
      <input type="text"></input><br/>
      <span>Image source URL</span>
      <input type="text"></input><br/>
      <span>Price</span>
      <input type="text"></input><br/>
      <button className="submit" >Confirm?</button>
    </div>
  )
}

export default AddEdit;