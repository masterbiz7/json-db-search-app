import React from 'react'

const generalResult = ({avatar, 
                        firstName,
                        lastName,                        
                        click }) => {
    return (
        <li onClick={click} className="card">            
                <img src={avatar} alt="ava"/>           
            <div>
                <h3>{firstName} {lastName}</h3>
            </div>                        
        </li>
    )
}

export default generalResult