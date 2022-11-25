import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Container, Typography, Divider } from '@mui/material';
import List from './components/List/index';
import Item from './components/Item/index';
import './App.css';

class App extends Component {
  state = {
    items: [
      { id: 1, name: 'Milk', desc: "Cow Milk", price: '3.5', img: 'milk', shop: "Shufersal", anotherImg: 'milk1', shopLink: "https://www.shufersal.co.il/online/he/search?text=%D7%97%D7%9C%D7%91" },
      { id: 2, name: 'Coffee', desc: "Black Coffee", price: '4', img: 'coffee', shop: "Shufersal", anotherImg: 'coffee1', shopLink: 'https://www.shufersal.co.il/online/he/search?text=%D7%A7%D7%A4%D7%94+%D7%A9%D7%97%D7%95%D7%A8' },
      { id: 3, name: 'Cheese', desc: "9% Cheese", price: '5', img: 'cheese', shop: "Rami Levi", anotherImg: 'cheese1', shopLink: 'https://www.rami-levy.co.il/he/online/search?q=%D7%92%D7%91%D7%99%D7%A0%D7%94%20%D7%9C%D7%91%D7%A0%D7%94' },
      { id: 4, name: 'Bread', desc: "White Bread", price: '6.2', img: 'bread', shop: "Victory", anotherImg: 'bread1', shopLink: 'https://www.victoryonline.co.il/search/%D7%9C%D7%97%D7%9D?catalogProduct=7984' },
      { id: 5, name: 'Eggs', desc: "Chiken Eggs, M", price: '8.6', img: 'eggs', shop: "Victory", anotherImg: 'eggs1', shopLink: 'https://www.victoryonline.co.il/search/%D7%91%D7%99%D7%A6%D7%99%D7%9D?catalogProduct=317197' },
    ]
  }
  render() {
    return (
      <div className="App" >
        <Container>
          <Typography variant='h1'>My Shopping List</Typography>
          <Divider sx={{ my: 5 }} variant="middle" ></Divider>
          <Routes>
            <Route exact path='/' element={<List items={this.state.items} />} />
            <Route path=':name' element={<Item items={this.state.items} />} />
          </Routes>
        </Container>
      </div >
    );
  }
}

export default App;
