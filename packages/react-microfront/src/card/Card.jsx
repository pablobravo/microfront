import React from "react";
import "./Card.css"
import Button from '../button/Button';

export default ({caption = 'React'}) => <div className='card'><Button caption={caption}/></div>;
