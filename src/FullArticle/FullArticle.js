import './FullArticle.css'
import { NavLink } from 'react-router-dom'

const FullArticle = ({displayArticle, toggleOutlet}) => {

    const handleOutlet = () => {
        toggleOutlet(false)
    }

    return (
        <>
        {displayArticle &&
        <>
            <button onClick={handleOutlet}>close</button>
            <img src={displayArticle.urlToImage}></img>
            <h2>{displayArticle.title}</h2>
            <span><p>{displayArticle.publishedAt}</p><p>{displayArticle.author}</p></span>
            <p>{displayArticle.content}</p>
            <NavLink to={displayArticle.url}>Go to {displayArticle.source.name}'s article </NavLink>
        </>
        }
        </>
    )
}

export default FullArticle