'use client'
import { CookieCream } from "../CookieCream/CookieCream";

export default function CookieRenderer() {
    const cookiesList: Boolean[] = [true, false, true]
        return cookiesList.map((isCookie, index) => (
            <CookieCream key={index} cookieZIndex={cookiesList.length - index}/>
        ))
}