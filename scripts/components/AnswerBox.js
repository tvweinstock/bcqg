import React from 'react';

class AnswerBox extends React.Component {
  constructor() {
    super();
    this.state = {
      hovered: false
    };
  }
  dragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
  }
  dragEnter(e) {
    this.setState({
      hovered: !this.state.hovered, 
      className: "hovered"
    });
  }
  dragLeave(e) {
    this.setState({
      hovered: !this.state.hovered
    });
  }
  drop(e) {
    const result = document.getElementById('result');
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
    let dragWord = e.dataTransfer.getData('word');
    let dragGender = e.dataTransfer.getData('text');
    let dropGender = this.props.gender;
    result.setAttribute('word', dragWord);
    if (dropGender === dragGender) {
      result.innerHTML = 'correct!';
      result.setAttribute('answer', 'correct');
    }
    else {
      result.innerHTML = 'non!';   
      result.setAttribute('answer', 'incorrect');
    }
    this.setState({
      hovered: !this.state.hovered
    });   
  }
  render() {
    const hoveredClass = this.state.hovered ? "hovered" : "not-hovered";
    return (
        <div className={hoveredClass}
                onDragOver={this.dragOver.bind(this)}
                onDragEnter={this.dragEnter.bind(this)}
                onDragLeave={this.dragLeave.bind(this)}
                onDrop={this.drop.bind(this)}
                >
          <div className="letter-container">
            {this.props.display}
          </div>
        </div>
    )
  }
} 

export default AnswerBox;