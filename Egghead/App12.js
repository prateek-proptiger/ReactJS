import React from "react";
import ReactDOM from "react-dom";

class App7 extends React.Component {
    constructor() {
        super();
        this.state = {
            red: 0
        }
        this.update = this.update.bind(this)
    }
    update(e) {
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
        })
    }
    render () {
        return (
          <div>
              <NumInput update={this.update} ref="red"
              min={0}
              max={255}
              step={1}
              val={+this.props.val}
              label="Red"
              />
          </div>
        );
    }
}

class NumInput extend React.Component {
    let label = this.props.label !== '' ? <label>{this.props.label} - {this.props.val}</label> : '';
    return (
        <div>
          <input ref="inp"
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          defaultValue={this.props.val}
          type={this.props.type}
          onChange={this.props.update}
          /> {label}
        </div>
    );
}

NumInput.propTypes = {
    min: React.propTypes.number,
    max: React.propTypes.number,
    step: React.propTypes.number,
    val: React.propTypes.number,
    label: React.propTypes.string,
    update: React.propTypes.func.isRequired,
    type: React.propTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
    min: 0,
    max: 0,
    step: 1,
    label: "",
    val: 0,
    type: 'range'
}

ReactDOM.render(<App12 />,
  document.getElementById('app'));
