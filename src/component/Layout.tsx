import Navbar from './Navbar'
import Footer from './Footer'

import { Metadata } from 'next'

export const metadata : Metadata = {
    title: 'PokeNext',
    icons: 'public/images/favicon.ico'
}

// { icon: "https://example.com/icon.png", apple: "https://example.com/apple-icon.png" }
// <link rel="icon" href="https://example.com/icon.png" />
// <link rel="apple-touch-icon" href="https:/

export default function Layout ( { children } : any){
    return(
        <>
            <Navbar />
                <main className='main_container'>
                    { children }
                </main>
            <Footer />
        </>
    )
}