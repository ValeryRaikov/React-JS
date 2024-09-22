const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/user');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
    'mongodb+srv://valeryraikov:8lmXK3wj6MbwySWt@redux-project.gzpob.mongodb.net/?retryWrites=true&w=majority&appName=redux-project'
).then(console.log('Database connected successfully'));

app.get('/', (req, res) => {
    userModel.find({})
        .then(users => res.json(users))
        .catch(error => res.json(error));
});

app.post('/create', (req, res) => {
    userModel.create(req.body)
        .then(user => res.json(user))
        .catch(error => res.json(error));
});

app.put('/edit/:id', (req, res) => {
    const id = req.params.id;

    userModel.findByIdAndUpdate({ _id: id }, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
    })
        .then(user => res.json(user))
        .catch(error => res.json(error));
});

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    userModel.findByIdAndDelete({ _id: id })
        .catch(error => res.json(error));
});

const port = 3030;
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});