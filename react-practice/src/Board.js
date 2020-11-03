import React, {Component} from 'react';
import './Board.css'; 
import List from './List';

export default class Board extends Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem('lists')) {
      const rawLS = localStorage.getItem('lists'); 
      const parsedLS = JSON.parse(rawLS);
      this.state = {list: parsedLS}
    } else {
      
    }
  }
}