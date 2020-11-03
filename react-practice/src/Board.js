import React, {Component} from 'react';
import './Board.css'; 
import List from './List';
import { render } from 'react-dom';

export default class Board extends Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem('lists')) {
      const rawLS = localStorage.getItem('lists'); 
      const parsedLS = JSON.parse(rawLS);
      this.state = {list: parsedLS}
    } else {
      this.state = {
        lists: [
          {
            title: 'Jason',
            id: 0, 
            cards: [{
              taskText: 'task one', 
              listNumber: 0,
              timeId: 0
            }, 
            {
              taskText: 'task two',
              listNumber: 0,
              timeId: 1
            }]
          }, 
          {
            title: 'Ellen', 
            id: 1, 
            cards: [{
              taskText: 'task one',
              listNumber: 2,
              timeId: 2,
            }, 
            {
              taskText: 'task two', 
              listNumber: 1,
              timeId: 3
            }]
          }
        ]
      }
    }
    localStorage.setItem('lists', JSON.stringify(this.state.lists))
  }

render() {
  const list = this.state.lists.map((list, index) => (
    <li className = "list-wrapper" key = {index}> 
      <List {...list} /> 
    </li>
  ));
  return (
    <div className = "board">
      <ul className = "lists">
        {lists}
      </ul>
    </div>
  );
}
}