import React from "react";
import ListItem from "../component/ListItem";

export default function AllList(props) {
  const { items, handleDeleteItem } = props;
  return (
    <div className="alllist">
      <h1>All list</h1>
      <div>
        {items.map((item) => (
          <ListItem
            key={item.itemid}
            item={item}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </div>
    </div>
  );
}
