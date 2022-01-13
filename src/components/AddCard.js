import React, { useState } from 'react'
import axios from "axios";


const AddCard = () => {
        const [card, setcard] = useState({Name: "", Birthdate:""})

        function addcard(Name, Birthdate) {
            const data = {
              
              Name, Birthdate
             
            };
        
            axios.post("http://localhost:5000/addcard", data);
            alert("New card Added")
          }

    const onClick =(e)=>{
        e.preventDefault();
        addcard(card.Name, card.Birthdate);
        setcard({Name: "", Birthdate:""})
    }

    const onChange =(e)=>{
        setcard({...card, [e.target.name]: e.target.value })
    }
    
    return (
        <div className="container">
        <h2>Add New card on Cloud</h2>
        <form>
          <div className="form-group">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="Name"
              value={card.Name}
              aria-describedby="emailHelp"
              placeholder="Enter Name"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Birthdate">Birthdate</label>
            <input
              type="text"
              className="form-control"
              id="birthdate"
              name="Birthdate"
              value={card.Birthdate}
              placeholder="Enter Birthdate(must be a date)"
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-outline-success my-2"onClick={onClick} >
            Save card
          </button>
        </form>
      </div>
    
    )
}

export default AddCard
