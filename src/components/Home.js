import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Home = () => {

    // let navigate = useNavigate();
  const [cards, setcards] = useState([]);

//   function onClickopen (_id) {
//       console.log("open")
//       navigate(`/card/${_id}`)
//   }
  
  useEffect(() => {
      axios
      .get(
          "http://localhost:5000/card"
          )
          .then((res) => {
              setcards(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }, []);
        
        const Sortedcard = cards.sort((a, b) =>
        b.Birthdate - a.Birthdate
        );
        console.log(Sortedcard)

      return (
        <div className="card">
        <div className=" outercard p-4 bg-gradient-to-b from-orange-500 to-purple-500 via-pink-500 ">
            <h1>Upcoming Birthday</h1>
            <ul>
            {Sortedcard.map((card) => {
                return(
                    <Link className='list my-4 ' key={card._id} to={`/card/${card._id}`}>{card.Name} , {card.Birthdate} </Link>
                    )
                  })}
            </ul>
        </div>
        </div>
    )
}

export default Home
