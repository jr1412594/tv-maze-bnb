import { Component } from 'react'
import MainContainer from './MainContainer'
import './App.css';

class App extends Component {

  state = {
    tvShows: []
  }

  componentDidMount(){
    fetch('http://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => this.setState(
        {
        tvShows: data
        }
      )
    )
  }
render () {
    return (
      <div className="App">
          <MainContainer birds={ this.state.tvShows } />
      </div>
    );
  }
}

export default App;
