import { Component } from "react";

import "./destination.css"

class DestinationData extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="des-text">
                    <h2> {this.props.heading}</h2>
                    <p>{this.props.text}</p>
                    
                </div>

                <div className="image">
                    <img src={this.props.img1} alt="homepage image" />
                    <img src={this.props.img2} alt="homepage image" />


                </div>

            </div>


        )
    }
}

export default DestinationData;