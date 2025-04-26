const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3100;
app.listen(PORT,()=>{
 console.log(`Server Running on port ${PORT}`);
})