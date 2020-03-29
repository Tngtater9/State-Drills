import React from 'react';
import './Accordion.css'

class Accordion extends React.Component {
    static defaultProps = {sections : []}
    state = {currentSectionIndex: null}
    handleClick (index) {
        this.setState({currentSectionIndex: index})
    }
    renderSection () {
        return this.props.sections.map((section, index) => (
            <li>
            <button key={index} onClick = {() => this.handleClick(index)}>{section.title}</button>
            {index === this.state.currentSectionIndex ? this.renderContent() : ""}
            </li>
            )
        )
    }
    renderContent () {
        const currentSection = this.props.sections[this.state.currentSectionIndex]
        return (
            <p>
                {currentSection.content}
            </p>
        )
    }
    render () {
        return (
            <ul>
                {this.renderSection()}
            </ul>
        )
    }
}

export default Accordion