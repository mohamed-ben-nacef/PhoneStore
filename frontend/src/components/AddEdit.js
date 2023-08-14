import React from 'react';

const AddEdit = (props) =>{
  const {selected} = props;
  <div>
    <p>Phone name</p>
    <input type="text">{selected.phone_name || ""}</input><br />
    <p>Phone brand</p>
    <input type="text">{selected.brand || ""}</input><br/>
    <p>Year of release</p>
    <input type="text">{selected.release_year || ""}</input><br/>
    <p>Storage in GB</p>
    <input type="text">{selected.storage || ""}</input><br/>
    <p>Memory in GB</p>
    <input type="text">{selected.memory || ""}</input><br/>
    <p>Camera MegaPixels</p>
    <input type="text">{selected.camera || ""}</input><br/>
    <p>Screen size in Inches</p>
    <input type="text">{selected.screen_size || ""}</input><br/>
    <p>Image source URL</p>
    <input type="text">{selected.img_url || ""}</input><br/>
    <p>Price</p>
    <input type="text">{selected.price || ""}</input><br/>
    <button className="submit" >Confirm?</button>
  </div>
}

export default AddEdit;