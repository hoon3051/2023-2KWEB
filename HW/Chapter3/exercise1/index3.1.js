const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const objectToString = obj =>
    Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');

app.get('/', (req, res) => res.send(objectToString(req.query)));
/*app.get('/', (req,res) =>{
    var req_query = req.query;
    res.send(req.query);
}*/

app.post('/', (req, res) => res.send(objectToString(req.body)));
/*app.post('/', (req,res) =>{
    var req_query = req.body;
    res.send(
        Object.keys(obj).map(k => `${k}: ${req.body[k]}`).join('\n');
}*/

app.put('/', (req, res) => res.send(objectToString(req.body)));

/*app.put('/', (req,res) =>{
    var req_query = req.body;
    res.send(
        Object.keys(obj).map(k => `${k}: ${req.body[k]}`).join('\n');
}*/
app.delete('/', (req, res) => res.send(objectToString(req.body)));
/*app.delete('/', (req,res) =>{
    var req_query = req.body;
    res.send(
        Object.keys(obj).map(k => `${k}: ${req.body[k]}`).join('\n');
}*/


app.listen(port, () => console.log(`Server listening on port ${port}!`));