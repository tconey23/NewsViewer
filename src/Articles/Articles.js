import './Articles.css'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Articles = ({props, articleDetail}) => {
    const {articles} = props 
    let listHeadlines

    const handleClick = (article) => {
        articleDetail(article)
    }

    if(props){
        listHeadlines = articles.map((article) => {
            const index = article.title.indexOf('|')
            const timeIndex = article.publishedAt.indexOf('T')
            let headlineTitle
            const headlineTime = article.publishedAt.substring(0, timeIndex)
            if(article.title.includes('|')){
                headlineTitle = article.title.substring(0, index)
            } else {
                headlineTitle = article.title
            }

            return(
                <section id='headlineCard'>
                    <section id='imageContainer'>
                        <img src={article.urlToImage}></img>
                        <p>Published on: {headlineTime}</p>
                        <p>An article by: {article.author}</p>
                    </section>
                    <section id='titleContainer'>
                        <h2>{headlineTitle}</h2>
                        <h3>{article.description}</h3>
                        <button onClick={() => handleClick(article)}>View full article</button>
                    </section>
                </section>
            )
        })
    }

    return (
        <>
            {listHeadlines && listHeadlines}
        </>
    )
}

export default Articles