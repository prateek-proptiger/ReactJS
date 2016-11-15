import React from "react";
import ReactDOM from "react-dom";

class App7 extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
              { id: 1, name: 'Prateek'},
              { id: 2, name: 'Sehgal'}
            ]
        }
        this.update = this.update.bind(this)
    }
    update(e) {
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
        })
    }
    render () {
        let rows = this.state.data.map((person) => {
            return <PersonRow key={person.id} data={person}/>
        });
        return (
            <table>
              <tbody>
                {rows}
              </tbody>
            </table>
        )
    }
}

const PersonRow = (props) => {
    return (
        <tr>
          <td>{props.data.id}</td>
          <td>{props.data.name}</td>
        </tr>
    );
}

ReactDOM.render(<App12 />,
  document.getElementById('app'));
