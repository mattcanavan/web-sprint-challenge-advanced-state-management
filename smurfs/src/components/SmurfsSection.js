import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchChars from '../actions/smurfsSectionActions';

class SmurfsSection extends Component {
    state = {
        smurfList: []
    }

    // componentDidMount() {
    //     fetch('http://localhost:3333/smurfs')
    //     .then(res => res.json())
    //     .then(data => this.setState({smurfList: data}))
    // } 
    // moved to smurfSectionActions (great name)

    componentDidMount() {
        this.props.fetchChars();
    }

    render() {

        const smurfItems = this.state.smurfList.map(singleSmurf => (
            <div key={singleSmurf.id}>
                <h3>Name: {singleSmurf.name}</h3>
                <h3>ID: {singleSmurf.id}</h3>
                <h3>Age: {singleSmurf.age}</h3>
                <h3>Height: {singleSmurf.height}</h3>
                <br/>
            </div>
        ))
        
        return (
            <div>
                <h2>List of Smurfs...</h2>
                { smurfItems }
            </div>
        )
    }
}

export default connect(null, { fetchChars })(SmurfsSection);