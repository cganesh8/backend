const express = require('express');
const { restart } = require('nodemon');

const app = express();
app.use(express.json());

const database ={
    learners: [
        {
            mobile: '0412886730',
            name: 'Subra',
            email: 'subra730@gmail.com',
            enrolled: new Date(),
            suburb: 'Dandenong',
            postcode: '3175',
            dtdate: '01/09/2020',
            dttime: '10.30am',
            dtcenter: 'Dandenong',
            source: 'TM2D'
        },
            {
                mobile: '0123456789',
                name: 'test',
                email: 'test@gmail.com',
                enrolled: new Date(),
                suburb: 'Bundoora',
                postcode: '3083',
                dtdate: '30/11/2020',
                dttime: '3.30pm',
                dtcenter: 'Bundoora',
                source: 'other'
            }
    ]
}

app.get('/', (req, res) => {
    res.send('connection to server.js is working');
})

app.post('/signin', (req, res) => {
    if (req.body.mobile === database.learners[0].mobile) {
        res.json('learner record exists in database');
    }
    else {
        res.json('learner record successfully created');
    }
})




app.listen(3000, ()=> {
    console.log('app is running on port 3000');
});
    



