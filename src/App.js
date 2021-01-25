import logo from './logo.svg';
import './App.css';
import Header from'./components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from'./components/Card.js';
var card_title_text='hello';
var imgsrc_text='https://picsum.photos/seed/picsum/200/300.jpg';

function App() {
  return (
    <div className="App">
    <Header/>
<Card card_title={card_title_text} imgsrc={imgsrc_text}/>
    </div>
  );
}

export default App;
