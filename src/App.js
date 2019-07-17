import React from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [
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

class App extends React.Component {

  render(){
    return (
      <div>
         {
           customers.map(c => {
             return (
               <Customer 
                 key={c.id}
                 id={c.id}
                 name={c.name}
                 image={c.image}
                 birthday={c.birthday}
                 gender={c.gender}
                 job={c.job}
               />
             );
           })
         }
      </div>
    );
  }
 }

export default App;
