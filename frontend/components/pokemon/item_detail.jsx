import React from 'react';

const ItemDetail = (props) => {
  let item = props.items.find( (el) => el.id === parseInt(props.params.itemId));
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Hapiness: {item.happiness}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};


export default ItemDetail;
