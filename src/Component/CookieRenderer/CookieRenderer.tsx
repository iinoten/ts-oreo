'use client'
import './CookieRenderer.css'
import { CookieCream } from "../CookieCream/CookieCream";
import CookieCollection from '../CookieCollection';

export default function CookieRenderer() {

    const cookiesCollection = new CookieCollection()
        return (
            <>
                <div className="CookieRenderer">
                    {
                        cookiesCollection.cookiesList.map((isCookie, index) => (
                            <CookieCream key={index} isCookie={isCookie} cookieZIndex={cookiesCollection.cookiesList.length - index}/>
                        ))
                    }
                </div>
                <button onClick={()=>cookiesCollection.addCookie()}>オ</button>
                <button onClick={()=>cookiesCollection.addCream()}>レ</button>
            </>
        )
}