import React from 'react'
import Footer from '../../../atoms/footer/Footer'
import Header from '../../../atoms/header/Header'
import Info from '../../../molecules/info/Info'

export default function Information() {
    return (
        <>
        <Header/>
        <div className='container-contain-information'>
        <div className='container-left-information'>
        </div>
            <div className='container-mid-contain-information'>
                <Info/>
            </div>
        <div className='container-right-information'>
        </div>
        </div>
        <Footer/>
        </>
    )
}
