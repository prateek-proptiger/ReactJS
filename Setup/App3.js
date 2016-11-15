import React from "react";
import ReactDOM from "react-dom";

class App3 extends React.Component {
    render () {
        return <div>{this.props.text}</div> // JSX - HTML like syntax for JS XML
    }
}
App3.propTypes = {
    text: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}
ReactDOM.render(<App3 text="Hello World"/>,
  document.getElementById('app'));

// This will now give an error as the required property 'cat' is not defined
