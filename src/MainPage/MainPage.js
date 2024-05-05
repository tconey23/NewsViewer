import { useEffect } from 'react'
import './MainPage.css'
import Articles from '../Articles/Articles'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const MainPage = ({props, viewArticle, outletVisible}) => {

    return(
        <>
        {outletVisible && 
            <div id='fullArticle'>
                <Outlet />
            </div>
        }
        <div id='articleList'>
            <Articles props={props} articleDetail={viewArticle}/>
        </div>
        </>
    )
}

export default MainPage