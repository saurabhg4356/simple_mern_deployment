const express = require("express")
const postModel = require("./models/post.model")
const multer = require("multer")
const uploadFile = require("./services/storage.service")
const cors = require("cors")

const upload = multer({ storage: multer.memoryStorage()})


const app = express();
app.use(cors())
app.use(express.json());

app.post('/create-post',upload.single("image"), async (req,res)=>{
    console.log(req.body);
    console.log(req.file);
    
    const result = await uploadFile(req.file.buffer)
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption,
    })

    return res.status(201).json({
        message : "post created succesfully",
        post
    })
    

    console.log(result);
    
    
})
app.get("/posts",async (req,res)=>{
        const post = await postModel.find()

        return res.status(200).json({
            message : "post fetch succesfully",
            post
        })
    })


module.exports = app;