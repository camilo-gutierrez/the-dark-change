import Header from "../../../atoms/header/Header"
import Footer from "../../../atoms/footer/Footer"
import Cards from "../../../molecules/cards/Cards"

export default function Bios() {
    return (
        <>
        <Header/>
        <div className='container-contain'>
        <div className='container-left'>
        </div>
            <div className='container-mid-contain'>
                <Cards/>
            </div>
        <div className='container-right'>
        </div>
        </div>
        <Footer/>
        </>
        
    )
}
