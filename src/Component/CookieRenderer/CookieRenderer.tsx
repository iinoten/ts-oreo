'use client'
import './CookieRenderer.css'
import { CookieCream } from "../CookieCream/CookieCream";
import { useState } from 'react';

export const CookieRenderer = () => {
    const [cookiesList, setCookiesList] = useState<boolean[]>([])
    const addCookie = () => {
        setCookiesList([...cookiesList, true])

    }
    const addCream = () => {
        setCookiesList([...cookiesList, false])

    }
    
    return (
        <>
            <div className="CookieRenderer">
                {
                    cookiesList.map((isCookie, index) => (
                        <CookieCream key={index} isCookie={isCookie} cookieZIndex={cookiesList.length - index}/>
                    ))
                }
            </div>
            <button onClick={()=>addCookie()}>オ</button>
            <button onClick={()=>addCream()}>レ</button>
        </>
    )
}
