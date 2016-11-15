import React from "react";
import ReactDOM from "react-dom";

class App4 extends React.Component {
    render () {
        return <div>{this.props.text}</div> // JSX - HTML like syntax for JS XML
    }
}
App4.propTypes = {
    text: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}
App4.defaultProps = {
    txt: 'Hello World'
}
ReactDOM.render(<App4 cat={5}/>,
  document.getElementById('app'));

// Will get the default property value here
