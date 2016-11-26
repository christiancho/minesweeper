import Board from './board';
import React from 'react';
import ReactDOM from 'react-dom';
import * as Minesweeper from '../minesweeper';

class Game extends React.Component {

  constructor() {
    super();
    this.state = {
      board: new Minesweeper.Board(15, 30)
    };

    this.updateGame = this.updateGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  resetGame(event) {
    event.preventDefault();
    this.setState({
      board: new Minesweeper.Board(15, 30),
      won: false,
      lost: false
    });
  }

  updateGame(tile, flagged) {

    if ( flagged ) tile.toggleFlag();
    else tile.explore();

    const board = this.state.board;
    this.setState({
      board: board
    });

    if ( board.won() || board.lost() ) {
      this.setState({
        won: board.won(),
        lost: board.lost()
      });
    }

  }

  render () {
    return (
      <div>
        <Board
          board={ this.state.board }
          updateGame={ this.updateGame }
        />
        <Modal
          resetGame={ this.resetGame }
          won={ this.state.won }
          lost={ this.state.lost }
        />
      </div>
    );
  }

}

class Modal extends React.Component {

  render() {

    if ( this.props.won || this.props.lost ){

      const state = ( this.props.won ) ? "won" : "lost";
      return (
        <div className="modal-back">
          <div className="modal-message">
            You { state }!
            <input type="submit" value="Play Again" onClick={ this.props.resetGame } />
          </div>
        </div>
      );
    }
    else {
      return (<div />);
    }
  }

}

export default Game;
