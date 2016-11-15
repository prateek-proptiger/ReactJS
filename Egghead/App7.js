import React from "react";
import ReactDOM from "react-dom";

class App7 extends React.Component {
    constructor() {
        super();
        this.state = {
            red: 0,
            green: 0,
            blue: 0
        }
        this.update = this.update.bind(this)
    }
    update(e) {
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
            green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
            blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
        })
    }
    render () {
        return (
          <div>
              <Slider update={this.update} ref="red" />
              {this.state.red}
              <br />
              <Slider update={this.update} ref="green" />
              {this.state.green}
              <br />
              <Slider update={this.update} ref="blue" />
              {this.state.blue}
              <br />
          </div>
        );
    }
}
ReactDOM.render(<App7 />,
  document.getElementById('app'));

class Slider extend React.Component {
    return (
        <div>
          <input ref="inp" type="range" min="0" max="255" />
        </div>
    );
}
