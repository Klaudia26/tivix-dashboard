import React from 'react';
import './style.scss';

const Card = (props) => {
    return (
        <div className="card">
            <div className={`card__header ${props.light ? 'card__header--light' : ''}`}>
                <h3 className="card__header-title">{props.title}</h3>
                <span className="card__header-action">{props.active}</span>
            </div>
            {props.children}
        </div>
    );
}

export default Card;
