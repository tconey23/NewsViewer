import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage/MainPage';
import FullArticle from './FullArticle/FullArticle';
import { getNews } from './APICalls';
import React, {useEffect, useState} from 'react'
import DummyNews from './DummyNews.json'
import {Route, Routes} from 'react-router-dom'

function App() {

const [articles, setArticles] = useState()
const [liveData, setLiveData] = useState(false)

const [displayArticle, setDisplayArticle] = useState()
const [outletVisible, setOutletVisible] = useState(false)

const viewArticle = articleDetail => {
    setDisplayArticle(articleDetail)
    setOutletVisible(true)
}
const toggleOutlet = () => {
  setDisplayArticle('')
  setOutletVisible(false)
}

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

  return (
    <main>
      <nav>techToday</nav>
      <div id='appContainer'>
        <Routes>
          {articles && 
            <Route path='/'  element={<MainPage viewArticle={viewArticle} outletVisible={outletVisible} props={articles}/>}>
              <Route path='/' element={<FullArticle toggleOutlet={toggleOutlet} displayArticle={displayArticle}/>}></Route>
              <Route path="*" element={<Error />} />
            </Route>
          }
        </Routes>
      </div>
    </main>

  );
}

export default App;
