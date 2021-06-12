import React, { Children } from 'react'
import { Header } from './Header/header'
import { Footer } from './Footer/footer'

const Layout = ({title, children}) => {
    return (
        <>
            <Header />
            {title}
            {children}
            <Footer />
        </>
    )
}

export { Layout }