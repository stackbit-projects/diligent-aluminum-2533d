import React from 'react'
import Radium from 'radium'

class Slide extends React.Component {

    componentWillMount () {
        // position props
        let position = this.props.position || {}
        let {x, y, z} = position
        if (typeof position[0] === 'number') {
            x = position[0]
            y = position[1]
            z = position[2]
        }

        // rotation props
        let rotation = this.props.rotation || {}
        let {rotateX, rotateY, rotateZ} = rotation
        if (typeof rotation[0] === 'number') {
            rotateX = rotation[0]
            rotateY = rotation[1]
            rotateZ = rotation[2]
        }

        // set final state
        this.state = {
            x: this.props.x || x || 0,
            y: this.props.y || y || 0,
            z: this.props.z || z || 0,
            rotateX: this.props.rotateX || rotateX || 0,
            rotateY: this.props.rotateY || rotateY || 0,
            rotateZ: this.props.rotateZ || this.props.rotate || rotateZ || 0,
            style: this.props.style || {}
        }

        this.state.style = Object.assign(this.state.style, {
            width: this.props.width,
            height: this.props.height,
        })

    }

    render () {
        let { x, y, z, rotateX, rotateY, rotateZ, style } = this.state
        return (
            <div
                id={this.props.id}
                style={style}
                className="step Slide"
                data-x={x}
                data-y={y}
                data-z={z}
                data-rotate-x={rotateX}
                data-rotate-y={rotateY}
                data-rotate-z={rotateZ}
                >
                {this.props.children}
            </div>
        )
    }

}

export default Radium(Slide)