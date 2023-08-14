const express = require('express');
const cors =require('cors');
const port = 5000;
const app = express();
const db = require('./mongoDb')
app.use(cors());
app.use(express.json())


app.get('/api/phones',(req,res)=> {
    db.getAllPhone()
    .then((result)=>{res.status(200).json(result)})
    .catch((err)=> console.log(err))
})

app.post('/api/phones', (req, res) => {
    const newPhoneData = req.body;
    db.addPhone(newPhoneData)
      .then((newPhone) => {
        res.status(201).json(newPhone);
      })
      .catch((error) => {
        console.error('Error adding phone:', error);
        res.status(500).json({ error: 'Failed to add phone' });
      });
  });

  app.delete('/api/phones/:_id',(req, res)=>{
    db.deletePhone(req.params._id)
    .then((deletePhone)=>{
        if(!deletePhone){
            res.status(404).json({error : "phone not found"})
        }
        res.status(200).json({message:"phone deleted"})
    })
.catch((error)=>{
    console.error("error deleting phone",error)
       res.status(200).json({error:"error deleteing phone"})
})
  })
  app.put('/api/phones/:_id', (req, res) => {
    const phoneId = req.params._id;
    const updatedPhoneData = req.body;
  
    db.update(phoneId, updatedPhoneData)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });
app.listen(port, ()=>{
    console.log(`listening on ${port}`);
    })