import React, { Component } from "react"

class RouletteGun extends Component {
    static defaultProps = {
        bulletInChamber : 8
    }
    constructor (props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false,
            state: "Are you ready?",
        }
    }
    componentWillUnmount () {
        clearTimeout(this.timeout);
    }
    pullTrigger (props) {
        this.setState({spinningTheChamber: true})
        let spinning = this.state.spinningTheChamber === true ? "spinning the chamber and pulling the trigger! ..." : ""
        this.setState({state: spinning})
        setTimeout(() =>{
        this.setState({chamber: Math.floor(Math.random * 9)})
        this.setState({spinningTheChamber: false})
        let outcome = this.state.chamber === props ? "BANG!!!" : "You're safe"
        this.setState({state: outcome})}, 2000)
        
    }
    render () {
        return (<div>
            <p>{this.state.state}</p>
            <button onClick = {() => this.pullTrigger(this.props.bulletInChamber)}>Pull the trigger!</button>
        </div>)
    }
}

export default RouletteGun