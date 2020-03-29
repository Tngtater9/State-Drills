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
        clearTimeout(this.timeout)
    }
    pullTrigger (props) {
        // this.setState({spinningTheChamber: true})
        // let spinning = this.state.spinningTheChamber === true ? "spinning the chamber and pulling the trigger! ..." : ""
        // this.setState({state: spinning})
        this.setState({spinningTheChamber: true,
        state: "spinning the chamber and pulling the trigger! ..."})
        setTimeout(() =>{
            const chamber = Math.ceil(Math.random() * 8)
            console.log(chamber)
            console.log(props)
            let outcome = chamber === props ? "BANG!!!" : "You're safe"
            this.setState({
                chamber: chamber,
                spinningTheChamber: false,
                state: outcome
            })
        }, 2000)
        // this.setState({chamber: {chamber},
        //     spinningTheChamber: false})
        // let outcome = this.state.chamber === props ? "BANG!!!" : "You're safe"
        // this.setState({state: outcome})}, 2000)
        
    
    }
    render () {
        return (<div>
            <p>{this.state.state}</p>
            <button onClick = {() => this.pullTrigger(this.props.bulletInChamber)}>Pull the trigger!</button>
        </div>)
    }
}

export default RouletteGun