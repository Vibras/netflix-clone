import React from 'react';
import './App.css';
import Row from './Row.js';
import requests from './requests.js';
import Banner from './Banner.js';

function App() {
  return ( 
    <div className = "app">
    {/* Nav*/}
    { /* Banner*/}
    <Banner />

    <Row title = "NETFILX ORIGINALS" fetchURL = {requests.fetchNetflixOriginals} isLargeRow />
    <Row title = "Trending Now" fetchURL = {requests.fetchTrending}/> 
    <Row title = "Top Rated" fetchURL = {requests.fetchTopRated}/> 
    <Row title = "Action Movies" fetchURL = {requests.fetchActionMovies}/> 
    <Row title = "Comedy Movies" fetchURL = {requests.fetchComedyMovies}/> 
    <Row title = "Horror Movies" fetchURL = {requests.fetchHorrorMovies}/> 
    <Row title = "Romance Movies" fetchURL = {requests.fetchRomanceMovies}/> 
    <Row title = "Documentaries" fetchURL = {requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;