import React from 'react';

export default class Presentation extends React.Component {

    componentDidMount () {
        impress().init()
    }

    getChildren () {
        const that = this
        return React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                width: child.props.width || that.props.width,
                height: child.props.height || that.props.height
            })
        })
    }

    render () {
        return (
            <div
                style={this.props.style}
                id="impress"
                className="Presentation"
                >
                {this.getChildren()}
            </div>
        )
    }

}