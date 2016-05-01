import React from 'react';
import Sortable from 'react-anything-sortable';
import SortableItem from './SortableItem';
import AnswerBox from './AnswerBox';

          // <SortableItem gender='feminin' sortData="feminin"> feminin </SortableItem>
          // <SortableItem gender='masculin' sortData="masculin"> masculin </SortableItem>
export default class Words extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  handleSort(data) {
    this.setState({
      result: data.join(' ')
    });
  }
  render() {
    return (
      <div className="words-container">
        <h1 className="words-title">B.C.Q.G</h1>
        <h2 className="words-title">Bon Chic, Quel Genre ?</h2>
        <Sortable onSort={::this.handleSort}>
          <AnswerBox gender='feminin' sortData="feminin">feminin</AnswerBox>
          <AnswerBox gender='masculin' sortData="masculin">masculin</AnswerBox>
          <SortableItem gender='feminin' sortData="maison"> maison </SortableItem>
        </Sortable>
      </div>
    )
  }
} 
