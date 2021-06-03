const Post = require("../models/Post")

const getPosts = (req, res) => {
    Post.find().then(result => {
        res.send(result)
    }, err => {
        res.status(400).send(err)
    })
}

const getSinglePost = (req, res) => {
    console.log(req.params.id);
    Post.findById(req.params.id).then(result => {
        res.send(result)
    }, err => {
        res.status(400).send(err)
    })
}

const addPost = (req, res) => {
    const post = new Post(req.body)
    post.save().then(result => {
        res.send(result)
    }).catch(err => {
        console.log(err);
        res.status(400).send(err)
    })

}

const updatePost = async (req, res) => {
    const post = await Post.findOne({ _id: req.body._id })

    post.overwrite(req.body)

    post.save().then(result => {
        res.send(result)
    }).catch(err => {
        res.status(400).send(err)
    })
}

const deletePost = (req, res) => {
    Post.deleteOne({ _id: req.params.id }).then(result => {
        res.send(result)
    }).catch(err => {
        res.status(400).send(err)
    })
}


module.exports = {
    addPost,
    getPosts,
    getSinglePost,
    updatePost,
    deletePost
}