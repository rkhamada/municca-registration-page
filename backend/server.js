const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/register/email-code', (req, res) => {
    res.json([
        emailCode= "ABCDEF"
      ]);
});

app.post('/api/register', (req, res) => {
    const userData = req.body;
    const response = 
    [
        {redirectTo: "/register/confirm"},
    ]
        
    res.status(201).send({ message: "User registered successfully", response });
  });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});