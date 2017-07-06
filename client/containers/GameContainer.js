import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import Board from '../components/Board';
import Status from '../components/Status';
import { makeMove, newGame } from '../actions';
import { MODES } from '../consts';

export class GameContainer extends Component {
  constructor() {
    super();
    this.handleCellClick = this.handleCellClick.bind(this);
  }

  handleCellClick(index) {
    this.props.makeMove(index);
  }

  render() {
    const { board, turn, player } = this.props;
    return (
      <div>
        <h1>Game board</h1>
        <Board board={board} onClick={this.handleCellClick} />
        <Status turn={turn} mode={MODES.ONLINE_MULTIPLAYER} player={player} onNewGame={this.props.newGame} />
      </div>
    )
  }
}

GameContainer.propTypes = {
  board: PropTypes.arrayOf(React.PropTypes.string.isRequired).isRequired,
  turn: PropTypes.shape({
    count: PropTypes.number.isRequired,
    sign: PropTypes.string.isRequired,
    winner: PropTypes.string
  }).isRequired,
  player: React.PropTypes.object
}

const mapStateToProps = state => ({
  board: state.board,
  turn: state.turn,
  player: state.player
});

export default connect(mapStateToProps, { makeMove, newGame })(GameContainer);
