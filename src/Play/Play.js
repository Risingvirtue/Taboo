import React from 'react';

class Play extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentWillMount() {
    setPlayerIndex();
    getWordsList();
  }

  setPlayerIndex = () => {
    for (var i = 0; i < this.state.users.length; i++) {
      var user = this.state.users[i];
      if (!user.hasGone) {
        this.setState({
          index: i
        })
      }
    }
  }

  getWordsList = () => {

  }


  render() {
    return <div>Test</div>
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({

    setWords: setWords
  }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(Score);
