import React from "react";

class App8 extends React.Component {
    render () {
        return <Button>I <Heart /> React </Button>
    };
}

class Button {
    render() {
        return <button>{this.props.children}</button>
        // this.props.children is similar to transclusion in angular
    }
}

class Heart {
    render() {
        return <span className="glyphicon glyphicon-heart"></span>
    }
}

export default App;
