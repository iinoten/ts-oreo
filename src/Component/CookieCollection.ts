'use client';
export default class CookieCollection {
    cookiesList: Boolean[] = [true, false, true, true, true, false, false, false, true, false, true, false,]
    constructor() {
        
    }
    addCookie() {
        this.cookiesList.push(true)
        console.log(this.cookiesList)
    }
    addCream() {
        this.cookiesList.push(false)
    }
}