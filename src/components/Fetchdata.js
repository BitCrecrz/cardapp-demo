import React from 'react'

export default function Fatchdata({ 
    _id,  
    Name,
    Birthdate}) {
        return( 
        <div>
            <div className="bottom-row" >
                <div className="name flex">
                  NAME:
                  <p className="p font-extrabold m-2 text-gray text-2xl">
                    
                    {Name}
                  </p>
                </div>
                <div className="birthday flex">
                  BIRTHDAY:
                  <p className="p font-extrabold m-2 text-2xl">{Birthdate}</p>
                </div>
              </div>
        </div>
    )
}

