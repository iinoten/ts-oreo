import { color } from "@/constant"
import "./CookieCream.css"

const addStyle = (index: number): { [key: string]: string|number } => {
    return ({
        "z-index": index.toString()
    })
}

type Props = {
    cookieZIndex: number,
    isCookie: boolean
}

export const CookieCream: VFC<Props> = ({cookieZIndex=0,isCookie=true}) => {
    
    return <div className={`Cookie ${isCookie?'black':'white'}`} style={addStyle(cookieZIndex)} />
}