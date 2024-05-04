import './Articles.css'
import { useEffect, useState } from 'react'

const Articles = ({props}) => {

    const {articles} = props 
    let listHeadlines

    if(props){
        console.log(articles)
        listHeadlines = articles.map((article) => {
            return(
                <>
                    <img src={article.urlToImage}></img>
                    <h2>{article.title}</h2>
                    <p>Published on: {article.publishedAt}</p>
                    <p>An article by: {article.author}</p>
                </>
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