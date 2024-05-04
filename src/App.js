import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage/MainPage';
import { getNews } from './APICalls';
import React, {useEffect, useState} from 'react'
import DummyNews from './DummyNews.json'

function App() {

const [articles, setArticles] = useState()
const [liveData, setLiveData] = useState(false)

useEffect(() => {
  const fetchNews = async () => {
    try {
      const news = await getNews()
      setArticles(news)
    } catch (error) {
      console.error('Error fetching news:', error)
    }
  };
  
  if(liveData){
    // fetchNews()
  } else {
    setArticles(DummyNews)
  }
  
}, [])

useEffect(() => {
  if(articles){
    console.log(articles)
  }
}, [articles])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
