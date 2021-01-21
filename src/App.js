import React ,{Component} from 'react';
import propTypes from 'prop-types';

// function App() {
//   // const greeting = "Hi";
//   // const dom = <h1 className="foo">{greeting}</h1>
//   // return <div><h1>Hello,world</h1></div>;

//   return (
//    <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type = "text" onChange={()=>{console.log("GGG")}} />
//     </React.Fragment>
//   )
// }

const App = ()=>{
  const profiles = [
    {name:"Taro",age:10},
    {name:"Hanako",age:5},
    {name:"NONAME",age:3},
  ]
  return (
  <div>
    {
      profiles.map((profile,index)=>{
        return  <User name={profile.name} age ={profile.age} key={index}/>
      })
    }
   
  </div>
  )
}
const User = (props)=>{
return <div>Hi,i am {props.name},and {props.age}years old!</div>
}

User.propTypes = {
  name:propTypes.string,
  age:propTypes.number.isRequired
}

// class App extends Component{
//   render(){
//     return React.createElement(
//       "div",
//       null,
//       "Hello,world"
//     )
//   }
// }

export default App;
