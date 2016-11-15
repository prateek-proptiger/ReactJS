import React from "react";
import ReactDOM from "react-dom";

class App2 extends React.Component {
    render () {
        return <div>{this.props.text}</div> // JSX - HTML like syntax for JS XML
    }
}
ReactDOM.render(<App2 text="Hello World"/>,
  document.getElementById('app'));
