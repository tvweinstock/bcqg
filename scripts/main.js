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
          <input id="result" placeholder="Réponse" />
          <AnswerBox gender="feminin" display="F" />
          <AnswerBox gender="masculin" display="M" />
        </section>
        <section className="drag-items">
          {Object.keys(this.state.quizWords).map(this.renderQuizWords)}
        </section>
      </div>
    )
  }
}


ReactDOM.render( 
  <App />, 
    document.getElementById('app')
  )
