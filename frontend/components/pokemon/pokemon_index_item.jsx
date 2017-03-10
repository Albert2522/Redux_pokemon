import React from 'react';
import { Link } from 'react-router';

export const PokemonIndexItem = (props) => {
  let pokePath = `/pokemon/${props.pokemon.id}`;



  return (
      <li ><Link to={pokePath}>{props.pokemon.id} <img src={props.pokemon.image_url}/>
      { props.pokemon.name }</Link></li>
    );
};
