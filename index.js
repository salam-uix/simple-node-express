const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello lerarning node');
})

const users = [
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01823323636' },
    { id: 1, name: 'Sucorita', email: 'Sucorita@gmail.com', phone: '01823323636' },
    { id: 2, name: 'Alamgir', email: 'Alamgir@gmail.com', phone: '01823323636' },
    { id: 3, name: 'Kopila', email: 'Kopila@gmail.com', phone: '01823323636' },
    { id: 4, name: 'Kuber', email: 'Kuber@gmail.com', phone: '01823323636' },
]

app.get('/users', (req, res) => {
    // Use query parametere
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users);
    }
})

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body)
    res.json(newUser);
})

//Dinamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.listen(port, () => {
    console.log('Listening to port', port);
})