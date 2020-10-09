import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postChar } from '../actions/smurfActions';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: '',
        };
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const newSmurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height,
        }

        // fetch('http://localhost:3333/smurfs', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newSmurf)
        // })
        // .then(res => res.json())
        // .then(data => console.log(data));
        //moved to action

        this.props.postChar(newSmurf)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Full Name: </label>
                    <input
                        type='text'
                        name='name'
                        value= {this.state.name}
                        placeholder='enter name'
                        onChange={this.onChange}
                    ></input>
                    <br />
                    <br />

                    <label>Age: </label>
                    <input
                        type='text'
                        name='age'
                        value= {this.state.age}
                        placeholder='enter age'
                        onChange={this.onChange}
                    ></input>
                    <br />
                    <br />

                    <label>Height (cm): </label>
                    <input
                        type='text'
                        name='height'
                        value= {this.state.height}
                        placeholder='enter height'
                        onChange={this.onChange}
                    ></input>
                    <br />
                    <br />

                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { postChar })(Form);