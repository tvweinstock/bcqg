import React from 'react';
import ReactDOM from 'react-dom';
import AnswerBox from './components/AnswerBox'
import SortableItem from './components/SortableItem'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizWords: require('./quiz_words.js')
    };
    this.renderQuizWords = this.renderQuizWords.bind(this);
  }
  renderQuizWords(key) {
    return <SortableItem key={key} details={this.state.quizWords[key]} gender={this.state.quizWords[key].gender} />
  }
  
  render() {
    return (
      <div>
        <section className="drop-boxes">
          <h1>Réponse: <span id="result"></span></h1>
          <AnswerBox gender="feminin" display="F" />
          <AnswerBox gender="masculin" display="M" />
        </section>
        <section className="drag-items">
          <ul>
            {Object.keys(this.state.quizWords).map(this.renderQuizWords)}
          </ul>
        </section>
      </div>
    )
  }
}


ReactDOM.render( 
  <App />, 
    document.getElementById('app')
  )
