
import React ,{Component} from 'react';

function App() {
  // const greeting = "Hi";
  // const dom = <h1 className="foo">{greeting}</h1>
  // return <div><h1>Hello,world</h1></div>;

  return (
   <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type = "text" onChange={()=>{console.log("GGG")}} />
    </React.Fragment>
  )
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
