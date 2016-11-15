import React from "react";
import ReactDOM from "react-dom";

class App11 extends React.Component {
    constructor() {
        super();
        this.state = {
           increasing: false
        };
        this.update = this.update.bind(this);
    }
    update(e) {
        ReactDOM.render(<App11 val={this.props.val+1}, document.getElementById('app'))
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            increasing: nextProps.val > this.props.val
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 5 == 0;
    }
    render() {
        console.log(this.state.increasing);
        return <button onClick={this.update}>{this.props.val}</button>
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps);
    }
}
App11.defaultProps = {
    val: 0
}
ReactDOM.render(<App11 val={this.props.val}, document.getElementById('app'))
export default App11
