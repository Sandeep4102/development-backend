const express = require ("express")

const Post = require('./models/post')
const router = express.Router()

router.get("/posts",async(req,res)=>{
    const posts = await Post.find()
    res.send(posts)
})

router.post('/posts',async (req,res)=>{
    const post = new Post({
        title : req.body.title,
        content : req.body.content,
    })
    await post.save()
    res.send(post)
})
module.exports = router