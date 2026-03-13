const express = require("express")

const app = express()

app.get("/", (req,res)=>{
    res.json({
        message:"DevSecOps Mini Project Running"
    })
})

app.get("/health",(req,res)=>{
    res.send("OK")
})

const port = 3000
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

module.exports = app