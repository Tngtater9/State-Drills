import React from 'react';

class Bomb extends React.Component {
    constructor (props){
        super (props)
        this.state = {
            count: 0,
            progress: ''
        }
    }
    componentDidMount () {
        this.interval = setInterval(() => {this.setState({
            count: this.state.count + 1
        })}, 1000);
    }
    componentWillUnmount () {
        this.interval = clearInterval();
    }
    render () {
        return (<div>
            <p>{this.state.count >= 8 ? 'Boom':(this.state.count % 2 === 0 ? "tick": "tock")}</p>
        </div>)
    }
}

export default Bomb