import React from 'react'

function List({ item, deleteData }) {
    const { name, age, image, id } = item

    return (
        <article className='person'>
            <img src={image} alt='' />
            <div>
                <h4>{name}</h4>
                <p>{age} years</p>
            </div>
            <span >
                <button onClick={(e) => deleteData(id)}><i className="fa-solid fa-x"></i></button>
            </span>
        </article>
    )
}

export default List
