const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://varstar:uservarun@cluster0.j97fv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
    console.log("Connected!")
})