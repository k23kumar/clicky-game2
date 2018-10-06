import React from "react"
import "./Tile.css"

class Tile extends React.Component {


   
    render() {
         return (
            <div className= "tile" onClick= { () => this.props.handleClick(this.props.id)}>
                <img src={this.props.image} />
            </div>
        )
    }
    


}

export default Tile;