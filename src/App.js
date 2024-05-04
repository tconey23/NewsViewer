import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage/MainPage';
import { getNews } from './APICalls';
import React, {useEffect, useState} from 'react'
import DummyNews from './DummyNews.json'
import {Route, Routes} from 'react-router-dom'

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
    fetchNews()
  } else {
    setArticles(DummyNews)
  }
  
}, [])

// useEffect(() => {
//   if(articles){
//     console.log(articles)
//   }
// }, [articles])

  return (
    <main>
      <Routes>
        {articles && <Route path='/'  element={<MainPage props={articles}/>}/>}
      </Routes>
    </main>

  );
}

export default App;
