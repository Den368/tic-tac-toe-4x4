import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { MODES } from '../consts';

import { newGame, setMode } from '../actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

export class SettingsContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      mode: props.mode
    };
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleNewGame() {
    this.props.router.push('/game');
    this.props.setMode(MODES.ONLINE_MULTIPLAYER);
    this.props.newGame();
  }

  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <h1>4x4 tic tac toe</h1>
        <br/>
        <MuiThemeProvider>
          <RaisedButton label="Start a new game" primary onTouchTap={this.handleNewGame} />
        </MuiThemeProvider>
      </div>
    )
  }
}

SettingsContainer.propTypes = {
  mode: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  mode: state.mode
});

export default withRouter(connect(mapStateToProps, { newGame, setMode })(SettingsContainer));
