import { color } from "@/constant"
import "./CookieCream.css"
import { useRef } from "react"

const addStyle = (index: number): { [key: string]: string|number } => {
    return ({
        "z-index": index.toString()
    })
}

type Props = {
    cookieZIndex: number,
    isCookie: boolean
}

export const CookieCream = ({cookieZIndex=0,isCookie=true}) => {
    return <div className={`Cookie ${isCookie?'black':'white'}`}  style={addStyle(cookieZIndex)} />
}