'use client';

import { ChangeEvent, useState } from "react"

export const CookieCollection = () => {
    const [cookiesList, setCookiesList] = useState<Array<Boolean>>([])
    const addCookie = () => {
        setCookiesList([...cookiesList, true])
        console.log(cookiesList)
    }
    const addCream = () => {
        setCookiesList([...cookiesList, false])
    }
}