const express = require('express')
const app = express();
const port = 3000;

const cookieParser = require('cookie-parser');

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('welcome to Home Page');
});

app.get('/set-cookie', (req, res) => {
    const key = "user";
    const value = "alisherkhan";
    res.cookie(key, value);
    res.send('COOKIE is set');
});

app.get('/get-cookie', (req, res) => { 
    console.log("Readin Cookies");
    const value = req.cookies.user;
    console.log(`cookie is read: ${value}`);
    res.send('COOKIE is read');
});

