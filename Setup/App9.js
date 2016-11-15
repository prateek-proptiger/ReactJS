import React from "react";
import ReactDOM from "react-dom";

// During the lifecycle of a React Component it is mounted (added to DOM) and unmounted (removed from DOM)
// All the lifecycle functions are explained below
class App9 extends React.Component {
    constructor() {
        super();
        this.state = {
           val: 0
        };
        this.update = this.update.bind(this);
    }
    update(e) {
        this.setState({
            val: this.state.val + 1
        });
    }
    componentWillMount() {
        console.log('mounting!');
    }
    render () {
        console.log('rendering!');
        return <button onClick={this.update}>{this.state.val}</button>
    }
    componentDidMount() {
        console.log('mounted!');
    }
    componentWillUnmount() {
        console.log('bye!');
    }
}

class Wrapper extends React.Component {
    constructor() {
        super();
    }
    mount(){
        ReactDOM.render(<App9 />, document.getElementById('a'));
    }
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }
    render() {
        return (
          <div>
              <button onClick={this.mount.bind(this)}>Mount</button>
              <button onClick={this.unmount.bind(this)}>Unmount</button>
              <div id="a"></div>
          </div>
        );
    }
}

export default Wrapper
