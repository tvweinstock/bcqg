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
  }
  render() {
    const quizWord = this.props.details;
    const playedClass = this.state.played ? "played" : "not-played";
    const correctClass = this.state.correct ? "correct" : "incorrect";
    const itemClasses = classNames(playedClass, correctClass);
    return (
      <li className={itemClasses}
          draggable="true"
          onDragStart={this.dragStart.bind(this)}
          onDragEnd={this.dragEnd.bind(this)}
          gender={quizWord.gender}
          >
          {quizWord.word}
      </li>   
    )
  }
}

export default SortableItem;