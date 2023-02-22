import { useState } from "react";

export default function AddList(props) {
  const [item, setItem] = useState({
    itemname: "",
    itemcategory: "",
    itemdescription: "",
  });

  const { handleAddItem } = props;

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddItem(item);
    setItem({
      itemname: "",
      itemcategory: "",
      itemdescription: "",
    });
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setItem({ ...item, [name]: value });
  }

  return (
    <div className="addlist">
      <h1>Add a list</h1>
      <div>
        <form onSubmit={(evt) => handleSubmit(evt)}>
          <label htmlFor="itemname">Name :</label>
          <br />
          <input
            type="text"
            name="itemname"
            id="itemname"
            value={item.itemname}
            onChange={(evt) => handleChange(evt)}
          />
          <br />
          <label htmlFor="itemcategory">Category :</label>
          <br />
          <select
            name="itemcategory"
            id="itemcategory"
            value={item.itemcategory}
            onChange={(evt) => handleChange(evt)}
          >
            <option value="">Selectionné une categorie</option>
            <option value="course">Courses</option>
            <option value="sortie">Sorties</option>
            <option value="animaux">Animaux</option>
            <option value="loisir">Loisir</option>
            <option value="voiture">Voiture</option>
          </select>
          <br />
          <label htmlFor="itemdescription">Description :</label>
          <br />
          <textarea
            name="itemdescription"
            id="itemdescription"
            cols="30"
            rows="10"
            value={item.itemdescription}
            onChange={(evt) => handleChange(evt)}
          ></textarea>

          <br />
          <input type="submit" value="Add list" className="btn" />
        </form>
      </div>
    </div>
  );
}
