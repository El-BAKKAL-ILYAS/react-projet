import React from 'react'

const Etudiants = ({look,data,note,color}) => {
  return (
    <div>
      {data.map((data1, index) =>(
        <ul>
            <li style={look} key={index}>{data1.prénom} <button>x</button></li>
            <li key={index}>{data1.nom} <button>x</button></li>
            <li key={index}>{data1.année} <button>x</button></li>
            <li key={index}>{note} <button>x</button></li>
      </ul> 
      ))}
    </div>
  );
};

export default Etudiants
