import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import StateBasic from './StateBasic';
// import StyledPanel from './StyledPanel';
import ListTemplate from './ListTemplate';
import books from './books';
import type { Book } from './Book'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ListTemplate src={books}>
      {(elem: Book) => (
        <>
          <dt>
            <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
              {elem.title} ({elem.price}円)
            </a>
          </dt>
          <dd>{elem.summary}</dd>
        </>
      )}
    </ListTemplate>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
