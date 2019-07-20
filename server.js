const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/api/customers', (req, res) => {
    res.send([
        {
        'id' : 1,
        'image' : 'https://placeimg.com/64/64/1',
        'name' : 'hong gil dong',
        'birthday' :'721214',
        'gender' : 'male',
        'job' : 'undergraduate'
      },
      {
        'id' : 2,
        'image' : 'https://placeimg.com/64/64/2',
        'name' : 'hong gil dong2',
        'birthday' :'821214',
        'gender' : 'male',
        'job' : 'lawyer'
      },
      {
        'id' : 3,
        'image' : 'https://placeimg.com/64/64/3',
        'name' : 'hong gil dong3',
        'birthday' :'921214',
        'gender' : 'female',
        'job' : 'doctor'
      }
      ]
   );
});

app.listen(port, () => console.log(`Listening on port ${port}`));