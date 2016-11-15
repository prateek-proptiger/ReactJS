import React from "react";
import ReactDOM from "react-dom";

class App6 extends React.Component {
    constructor() {
        super();
        this.state = {
           txt: ''
        }
        this.update = this.update.bind(this)
        // What does this does ?
    }
    update(e) {
        this.setState({txt: e.target.value})
    }
    render () {
        return (
          <div>
              <Widget update={this.update} text={this.state.text} />
              <Widget update={this.update} text={this.state.text} />
              <Widget update={this.update} text={this.state.text} />
              <Widget update={this.update} text={this.state.text} />
          </div>
        );
    }
}
ReactDOM.render(<App6 />,
  document.getElementById('app'));

const Widget = (props) => {
    return (
        <div>
          <input type="text" onChange={props.update}>
          <h1>{props.text}</h1>
        </div>
    );
}
