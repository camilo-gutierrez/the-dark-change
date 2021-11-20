import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Info from "../info/Info";
import { cardsData } from "../../../redux/actions/cardsAction";
import { setCharacter } from "../../../redux/actions/cardAction";
import { If } from "../../../utils/helpers";

export default function Cards() {
  const dispatch = useDispatch();

  const { cardList } = useSelector((state) => state.cards);
  const { cardSelected } = useSelector((state) => state.cards);

  const setCharacterNow = (id) => {
    const cardFound = cardList.find((c) => c.id === id);
    dispatch(setCharacter(cardFound));
  };

  const randomCharacter = () => {
    let selected = {};
    if (cardList.length) {
      selected = cardList[Math.floor(Math.random() * cardList.length)];
      return selected;
    } else {
      return null;
    }
  };

  useEffect(() => {
    dispatch(setCharacter(randomCharacter()));
  }, [cardList]);

  useEffect(() => {
    (() => {
      dispatch(cardsData());
    })();
  }, []);

  return (
    <div className="container-cards">
      <div className="cards">
        {cardList &&
          cardList.map((card) => {
            return (
              <>
                <div
                  key={card.id}
                  onMouseEnter={() => setCharacterNow(card.id)}
                  className="thumbnails"
                >
                  <Link to={`/hero/${card.id}`}>
                    <img src={card.image.url} />
                    <text className='text-img'>New</text>
                  </Link>
                </div>
              </>
            );
          })}
      </div>
      <div className="card-image">
        <div className="container-infoo">
          <h2>{cardSelected?.name}</h2>
          <blockquote className="reactive">
            Intelligence : {cardSelected?.powerstats?.intelligence} <br></br>
            Strength : {cardSelected?.powerstats?.strength} <br></br>
            Power : {cardSelected?.powerstats?.power} <br></br>
            Combat : {cardSelected?.powerstats?.combat} <br></br>
          </blockquote>
        </div>
        <If Condition={cardSelected}>
          <img src={cardSelected?.image?.url} />
        </If>
      </div>
    </div>
  );
}
