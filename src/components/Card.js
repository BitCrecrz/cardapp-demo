import React, { useEffect, useState } from "react";
import PIC from "./image/user.png";
import logo from "./image/logo.jpg";
import Fetchdata from "./Fetchdata";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Card = () => {
  let navigate = useNavigate();

  function onAdd(e) {
    e.preventDefault();
    navigate(`/addcard`);
  }

  
  const [cards, setcards] = useState([]);

  useEffect((_id) => {
    axios
    .get(
        `/card/${_id}`
        )
        .then((res) => {
            setcards(res.data);
          })
          .catch((error) => {
              console.log(error);
          });
      }, []);

  return (
    <div className="card">
      <div className=" outercard bg-gradient-to-b from-indigo-500 to-purple-500 via-pink-500 ">
        <div className="container ">
          <div className="innercard">
            <div className="card-body">
              <div className="top-row">
                <div className="logo1">
                  <img src={logo} style={{ height: "4rem" }} alt="" />
                </div>
                <div className="card font-extrabold">
                  <i className="fas fa-cards text-orange-500 "></i> 142
                </div>
              </div>
              <img src={PIC} className="pic" alt="" />
              
              {cards.map((card) => {
                  return (
                    <Fetchdata
                    id={card._id}
                    key={card.id}
                    Name={card.Name}
                    Birthdate={card.Birthdate}
                    />
                    );
                  })}
              <p className="footer flex text-xs font-bold">
                {" "}
                Powerd by <img src={logo} className="w-12 ml-2" alt="" />
              </p>
            </div>
          </div>
          <div className="buttons">
            <h1 className="h">
              Share Card
              <button className="bg-white hover:bg-slate-200 text-orange-500 font-bold text-2xl m-2 p-4 rounded-full">
                <i className="fas fa-share-square"></i>
              </button>
              <button
                className="bg-white hover:bg-slate-200 text-orange-500 font-bold text-2xl m-2 p-4 rounded-full"
                onClick={onAdd}
              >
                <i className="fas fa-plus"></i>
              </button>
              New Card
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
