import React from 'react';
import ReactDOM from 'react-dom';
import AnswerBox from './components/AnswerBox'
import SortableItem from './components/SortableItem'
import Modal from './components/Modal'

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
      <div className="main">
        <div className="overlay"/>
        <Modal text="Intro" id="modal-intro" description="Test your knowledge of french genders, drag the words over the 'F' and 'M' answer keys. Left is for feminin and right for masculin!" />
        <Modal text="Fin !" description="Voilà ton score:" id="modal-score" img="https://upload.wikimedia.org/wikipedia/commons/a/a4/Animated-Flag-France.gif" />
        <section className="drop-boxes">
          <input id="result" placeholder="Réponse" disabled />
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
