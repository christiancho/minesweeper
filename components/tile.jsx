import React from 'react';

class Tile extends React.Component {

  constructor(props) {
    super(props);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  handleLeftClick(event) {
    console.log("EXPLORE!");
    this.props.updateGame(this.props.tile, false);
  }

  handleRightClick(event) {
    event.preventDefault();
    console.log("FLAG!");
    this.props.updateGame(this.props.tile, true);
  }

  render () {

    const tile = this.props.tile;
    let info = "";
    let classInfo = "";

    if ( tile.explored && !tile.bombed ) {
      info = (tile.adjacentBombCount() === 0) ? "" : tile.adjacentBombCount();
      classInfo = "explored";
    } else if ( tile.explored && tile.bombed ) {
      classInfo = "bombed";
    } else if ( tile.flagged ) {
      classInfo = "flagged";
    } else {
      classInfo = "unexplored";
    }

    return (
      <li
        className={ classInfo }
        onClick={ this.handleLeftClick }
        onContextMenu={ this.handleRightClick }
      >
        { info }
      </li>
    );
  }

}

export default Tile;
