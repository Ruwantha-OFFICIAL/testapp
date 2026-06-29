const express = require('express');
const app = express();
const PORT = process.env.PORT||8080;

// Middleware to parse JSON bodies
app.use(express.json());
app.get('/',(req,res)=>{
  res.json({
    "status":true,
    "mk":"mmmm"
  })
})

app.listen(PORT, () => {
    console.log(`🚀 Server is live on port ${PORT}`);
});