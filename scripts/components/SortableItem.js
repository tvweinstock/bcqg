import React from 'react';
import classNames from 'classnames';

class SortableItem extends React.Component {
  constructor() {
    super();
    this.state = {
      played: false,
      correct: true
    };
  }
  dragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text', this.props.gender);
    e.dataTransfer.setData('word', this.props.details.word);
  }
  dragEnd(e) {
    let result = document.getElementById('result');
    let resultWord = result.getAttribute('word');
    let wordsLeftToPlay = document.querySelectorAll('.not-played').length;
    if (resultWord === this.props.details.word) {
      this.setState({
        played: !this.state.played,
        className: "played"
      });
      let resultAnswer = result.getAttribute('answer');
      if (resultAnswer === 'correct') {
        this.setState({
          correct: this.state.correct,
          className: "correct"
      });
      } else {
         this.setState({
          correct: !this.state.correct,
          className: "incorrect"
      });
      }
    }
    if (wordsLeftToPlay <= 1) {
      let scoreModal = document.getElementById("modal-score");
      let overlay = document.querySelector('.overlay')
      let totalCount = document.querySelector(".drag-items").children.length
      let correctCount = document.querySelectorAll(".correct").length
      scoreModal.style.display = "block";
      overlay.style.display = "block";
      console.log(scoreModal)
      scoreModal.children[3].innerHTML = correctCount + '/' + totalCount;
    }
  }  
  render() {
    const quizWord = this.props.details;
    const playedClass = this.state.played ? "played" : "not-played";
    const correctClass = this.state.correct ? "correct" : "incorrect";
    const itemClasses = classNames(playedClass, correctClass);
    return (
      <div className={itemClasses}
          draggable="true"
          onDragStart={this.dragStart.bind(this)}
          onDragEnd={this.dragEnd.bind(this)}
          gender={quizWord.gender}
          title={quizWord.eng_trad}
          >
          {quizWord.word}
      </div>   
    )
  }
}

export default SortableItem;