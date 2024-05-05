import './Error.css'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <div id='errorContainer'>
                <h1>ERROR</h1>
                <p id='errorMessage'>This page does not exist</p>
            </div>
            <Link to={'/'}>Go back</Link>
        </>
    )
}

export default Error