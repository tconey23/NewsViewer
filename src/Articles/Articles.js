import './Articles.css'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Articles = ({props}) => {

    const {articles} = props 
    let listHeadlines

    if(props){
        console.log(articles)
        listHeadlines = articles.map((article) => {
            const index = article.title.indexOf('|')
            let headlineTitle
            if(article.title.includes('|')){
                headlineTitle = article.title.substring(0, index)
            } else {
                headlineTitle = article.title
            }

            return(
                <section id='headlineCard'>
                    <section id='imageContainer'>
                        <img src={article.urlToImage}></img>
                        <p>Published on: {article.publishedAt}</p>
                        <p>An article by: {article.author}</p>
                    </section>
                    <section id='titleContainer'>
                        <h2>{headlineTitle}</h2>
                        <NavLink to={article.url}>View full article</NavLink>
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