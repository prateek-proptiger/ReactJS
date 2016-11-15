import React from "react";
import ReactDOM from "react-dom";

class App14 extends React.Component {
    constructor() {
        super();
        this.state = {
            input: '/* add your JSX here */',
            output: '',
            err: ''
        }
        this.update = this.update.bind(this)
    }
    update(e) {
        let code = e.target.value;
        try {
            this.setState({
                /* to use this function include babel file in index.html */
                output: babel.transform(code, {
                    stage: 0,
                    loose: 'all'
                }).code,
                err: ''
            })
        }
        catch (error) {
            this.setState({output: '', err: error.message})
        }
    }
    render() {
        return (
            <div>
                <header>{this.state.err}</header>
                <div className="container">
                    <textarea defaultValue={this.state.input} onChange={this.update}></textarea>
                    <pre>{this.state.output}</pre>
                </div>
            </div>
        );
    }
}
