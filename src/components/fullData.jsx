import React from 'react'

const FullData = ({avatar, 
                   firstName,
                   lastName,
                   company,
                   title,
                   email,
                   phone,
                   street,
                   city,
                   zipCode,
                   country,
                   click }) => {
    return (
        <li onClick={click} className="full-info">
            
                <img src={avatar} alt="ava"/>
            
            <div className="info">
                <h2>{firstName} {lastName}</h2>
                <p><span className="bold">Company: </span>{company}</p>
                <p><span className="bold">Position: </span>{title}</p>
                <hr/>
                <p><span className="bold">Email: </span>{email}</p>
                <p><span className="bold">Phone: </span>{phone}</p>
                <hr/>
                <p><span className="bold">Address: </span></p>
                <p>{street}</p>
                <p>{city}</p>
                <p>{zipCode}</p>
                <p>{country}</p>
            </div>
            
        </li>
    )
}

export default FullData