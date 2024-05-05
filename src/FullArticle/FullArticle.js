import './FullArticle.css'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

const FullArticle = ({displayArticle, toggleOutlet}) => {

    const handleOutlet = () => {
        toggleOutlet(false)
    }

    const timeIndex = displayArticle.publishedAt.indexOf('T')
    const headlineTime = displayArticle.publishedAt.substring(0, timeIndex)

    return (
        <>
        {displayArticle && 
        <>
            <button onClick={handleOutlet}>close</button>
            <h2>{displayArticle.title}</h2>
            <img src={displayArticle.urlToImage}></img>
            <span><p>Published on: {headlineTime}</p><p>Written by: {displayArticle.author}</p></span>
            <p id='articleContent'>{displayArticle.content}</p>
            <NavLink to={displayArticle.url}>Go to {displayArticle.source.name}'s article </NavLink>
        </>
        }
        </>
    )
}

export default FullArticle