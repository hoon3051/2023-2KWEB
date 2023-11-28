const express = require('express');
const app = express();
const port = 3000;

app.get('/factorial', (req, res) => {
    const { number } = req.query;//query로 받기
    return res.redirect(`/factorial/${number}`);
});

app.get('/factorial/:number', (req, res) => {
    const { number } = req.params;//라우트로 리다이렉트
    const parsedNumber = parseInt(number, 10);
    let result = 1;
    
    for (let i = 0; i < parsedNumber; i++){ 
        result *= (i + 1);
    }

    return res.send(`${parsedNumber}! = ${result}`);
});


app.listen(port, () => console.log(`Server listening on port ${port}!`));