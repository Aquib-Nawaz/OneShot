// /routes/productRoutes.js
const mongoose = require('mongoose');
const College = mongoose.model('colleges');
const Student = mongoose.model('students');

module.exports = (app) => {

  app.get(`/api/college`, async (req, res) => {
    let colleges = await College.find();
    return res.status(200).send(colleges);
  });

  app.get(`/api/college/:id`, async (req, res) => {
    const {id} = req.params;
    let college = await College.findOne({'id': id});
    return res.status(200).send(college);
  });

  app.get(`/api/student`, async (req, res) => {
    let students = await Student.find();
    return res.status(200).send(students);
  });


//   app.post(`/api/product`, async (req, res) => {
//     let product = await Product.create(req.body);
//     return res.status(201).send({   
//       error: false,
//       product
//     })
//   });

//   app.put(`/api/product/:id`, async (req, res) => {
//     const {id} = req.params;

//     let product = await Product.findByIdAndUpdate(id, req.body);

//     return res.status(202).send({
//       error: false,
//       product
//     })

//   });

//   app.delete(`/api/product/:id`, async (req, res) => {
//     const {id} = req.params;

//     let product = await Product.findByIdAndDelete(id);

//     return res.status(202).send({
//       error: false,
//       product
//     })

//   })

}