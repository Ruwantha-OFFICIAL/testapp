const express = require('express');
const app = express();
const PORT = process.env.PORT||3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.get('/',(req,res)=>{
  res.json({
    "status":true,
    "mk":"mmmm"
  })
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server is live on port ${PORT}`);
});