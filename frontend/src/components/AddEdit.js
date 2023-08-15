// import React, { useState } from 'react';

// const AddEdit = (props) =>{
//   const {selected} = props;
//   const [phone_name,setPhoneName] = useState('')
//   const [brand,setBrand] = useState('')
//   const [release_year,setReleaseYear] = useState('')
//   const [storage,setStorage] = useState('')
//   const [memory,setMemory] = useState('')
//   const [camera,setCamera] = useState('')
//   const [screen_size,setScreenSize] = useState('')
//   const [img_url,setImgURL] = useState('')
//   const [price,setPrice] = useState('')
//   if(selected){
//     setPhoneName(selected.phone_name);
//     setBrand(selected.brand);
//     setReleaseYear(selected.release_year);
//     setStorage(selected.storage);
//     setMemory(selected.memory);
//     setCamera(selected.camera);
//     setScreenSize(selected.screen_size);
//     setImgURL(selected.img_url);
//     setPrice(selected.price);
//   }

//   return (
//     <div>
//       <p>Phone name</p>
//       <input type="text">{phone_name}</input><br />
//       <p>Phone brand</p>
//       <input type="text">{brand}</input><br/>
//       <p>Year of release</p>
//       <input type="text">{release_year}</input><br/>
//       <p>Storage in GB</p>
//       <input type="text">{storage}</input><br/>
//       <p>Memory in GB</p>
//       <input type="text">{memory}</input><br/>
//       <p>Camera MegaPixels</p>
//       <input type="text">{camera}</input><br/>
//       <p>Screen size in Inches</p>
//       <input type="text">{screen_size}</input><br/>
//       <p>Image source URL</p>
//       <input type="text">{img_url}</input><br/>
//       <p>Price</p>
//       <input type="text">{price}</input><br/>
//       <button className="submit" >Confirm?</button>
//     </div>
//   )
// }

// export default AddEdit;