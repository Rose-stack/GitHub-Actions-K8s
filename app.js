const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.status(200);
    res.send("Hello World!!");
});


app.listen(PORT, () => console.log(`App listening on port ${PORT} `));