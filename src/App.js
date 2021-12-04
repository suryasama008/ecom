import React,{Component} from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showChild:true,
      text : ''
    };
  }
  // handleClick = () => {
  //   this.setState((prevState, prevProps) => {
  //     return {meaningOfLife: prevState.meaningOfLife + prevProps.increament}
  //   },
  //     () => console.log(this.state.meaningOfLife) )
    
  // }
render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>
         {this.state.text}
        </p>
        <button
          onClick = {() => 
          this.setState(state => ({
            showChild : !state.showChild
          }))
          }
        >
          Toggle Life Cycle
        </button>
        <button
        onClick = { () => 
        this.setState(state => ({
            text: state.text + "_Hello"
        }))
      }
        >
           Add Hello
        </button>
        {/* {this.state.showChild ? <Lifecycles text = {this.state.text} /> : null } */}
      </header>
    </div>
  );
}
}
export default App;
