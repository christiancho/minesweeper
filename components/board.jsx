import Tile from './tile';
import React from 'react';

class Board extends React.Component {

  renderRows() {
    const board = this.props.board;
    return board.grid.map( (row, rowIndex) => {
      return (
        <ul className="row" key={ rowIndex }>
          { this.renderTiles(row, rowIndex) }
        </ul>
      );
    });
  }

  renderTiles(row, rowIndex) {
    const board = this.props.board;
    return row.map ( (tile, colIndex) => {
      return (
        <Tile
          tile={ tile }
          updateGame={ this.props.updateGame }
          key={ rowIndex * board.gridSize + colIndex }
        />
      );
    });
  }

  render () {
    return (
      <div id="board">
        { this.renderRows() }
      </div>
    );
  }

}

export default Board;
