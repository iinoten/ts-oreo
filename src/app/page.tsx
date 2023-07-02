'use client';
import CookieCollection from "@/Component/CookieCollection";
import { CookieCream } from "@/Component/CookieCream/CookieCream";
import CookieRenderer from "@/Component/CookieRenderer/CookieRenderer";

export default function Home() {
  const cookieCollection = new CookieCollection()
  return (
    <>
      <CookieRenderer />
      <button onClick={()=>cookieCollection.addCookie()}>オ</button>
      <button onClick={()=>cookieCollection.addCream()}>レ</button>
    </>
  )
}
