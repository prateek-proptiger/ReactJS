import React from "react";
import ReactDOM from "react-dom";

class App5 extends React.Component {
    constructor() {
        super();
        this.state = {
           txt: 'this is the state text',
           cat: 0
        }
    }
    update(e) {
        this.setState({
            txt: e.target.value
        });
        // No need to pass entire object in updated state
    }
    render () {
        return (
          <div>
              <input type="text" onChange="this.update.bind(this)" />
              <h1>{this.state.text}</h1>
          </div>
        );
    }
}
ReactDOM.render(<App5 />,
  document.getElementById('app'));
