'use client';
import { CookieCream } from "@/Component/CookieCream/CookieCream";
import {CookieRenderer} from "@/Component/CookieRenderer/CookieRenderer";
import "./page.css"

export default function Home() {
  return (
    <div className="page">
      <CookieRenderer />
    </div>
  )
}
