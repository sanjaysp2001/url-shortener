import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.end("This server is running!")
})
app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
