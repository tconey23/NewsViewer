import { useEffect } from 'react'
import './MainPage.css'
import Articles from '../Articles/Articles'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const MainPage = ({props, viewArticle}) => {


    return(
        <>
        <Outlet>
            <div></div>
        </Outlet>
        <Articles props={props} articleDetail={viewArticle}/>
        </>
    )
}

export default MainPage