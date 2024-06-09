import React from "react";
import { GiDiploma } from "react-icons/gi";

const Card2 = ({ role, name, description, location, year }) => {
    return (
        <div className='timeline__item'>
            <span>
                <GiDiploma className='timeline__icon' />
                <span className='timeline__date'>{year}</span>
                <h3 className='timeline__title'>{role}</h3>
                <span className='timeline__title'>{name}</span>
                <p className='timeline__text'>
                    {location}
                </p>
                <p className='timeline__text'>
                    {description}
                </p>
            </span>
        </div>
    );
};

export default Card2;
