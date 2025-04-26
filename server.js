const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}. Go to http://localhost:${port} to view it.`)
})