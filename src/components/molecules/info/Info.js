import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { cardData } from '../../../redux/actions/cardAction';


export default function Info() {

    const dispatch = useDispatch()

    const params = useParams();

    const cardInfo = useSelector(state => state.card.cardList)

    console.log(cardInfo);

    useEffect(() => {
        (() => {
            dispatch(cardData(params.id)); 
        })()
     }, [])

   

    return (
        <div className='container-div'>
        { cardInfo && cardInfo ? ( <>
            <h2 className='text-name-hero'>{cardInfo.name}</h2>
            <div className='container-info'>
                <div className='module-info'>
                    <div className='div-info'>
                        <h4>name:</h4>
                        <h5>{cardInfo.name}</h5>
                    </div>
                    <div className='div-info'>
                        <h4>gender:</h4>
                        <h5>{cardInfo.appearance.gender}</h5>
                    </div>
                    <div className='div-info'>
                       <h4>race:</h4>
                       <h5>{cardInfo.appearance.race === 'null' ? '****' : cardInfo.appearance.race}</h5>
                    </div>
                    <div className='div-info'>
                        <h4>height:</h4>
                        <h5>{cardInfo.appearance.height[1] }</h5>
                    </div>
                    <div className='div-info'>
                        <h4>weight:</h4>   
                        <h5>{cardInfo.appearance.weight[1]}</h5>
                    </div>
                     <div className='div-info'>
                        <h4>eye-color:</h4>
                        <h5>{cardInfo.appearance['eye-color']}</h5>
                    </div>
                    <div className='div-info'>
                        <h4>hair-color:</h4>
                        <h5>{cardInfo.appearance['hair-color']}</h5>
                    </div> 
                    <div className='container-img'>
                    <img  src={cardInfo.image.url} />
                    </div>
                </div>
            </div>
            </>) :
        ( <div></div> )
      }
      </div>
    )
}
