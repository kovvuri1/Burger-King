import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Burger_King/Components/App';
import data from "./Asserts/data.json";
import Card from './Burger_King/Components/Cards';
import Phone from "./Burger_King/Components/Details"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <>
    <div className='card'>
      {data.map(x=><Card imsrc={x.source} heading={x.heading} para={x.details} para1={x.btn} but={x.btn1}/>)}
    </div>
    </>
    <Phone/>
    
  </React.StrictMode>
);


