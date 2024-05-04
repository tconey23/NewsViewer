import { useEffect } from 'react'
import './MainPage.css'
import Articles from '../Articles/Articles'

const MainPage = ({props}) => {



    return(
        <Articles props={props}/>
    )
}

export default MainPage