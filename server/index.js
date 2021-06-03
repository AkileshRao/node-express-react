const express = require('express')
const cors = require('cors')
const app = express()
const posts = require('./routes/posts')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8000;

const mongo = "mongodb+srv://akileshrao2:pass@cluster0.poxn3.mongodb.net/postsDB?retryWrites=true&w=majority"
mongoose.connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true }).then(res => {
    console.log("Connected to DB");
    app.listen(PORT)
}).catch(err => {
    console.log(err);
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())

app.use('/posts', posts)





