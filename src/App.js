import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Menu from "./component/Menu.js";
import AddList from "./page/AddList.js";
import AllList from "./page/AllList.js";
import Home from "./page/Home.js";
import useLocalStorage from "./hooks/useLocalStorage.js";
import "./style/App.css";

function App() {
  const [items, setItems] = useState([]);
  const STORAGE_KEY = "items";
  const [storedItems, setStoredItems] = useLocalStorage(STORAGE_KEY, []);

  useEffect(() => {
    console.log("vide");
    setItems(storedItems);
  }, []);

  useEffect(() => {
    console.log("on surveille");
    setStoredItems(items);
  }, [items]);

  function handleAddItem(item) {
    console.log("handleAddItem", item);
    setItems([...items, { item, itemid: uuidv4() }]);
  }

  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.itemid !== id));
  }

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add"
          element={<AddList handleAddItem={handleAddItem} />}
        />
        <Route
          path="/list"
          element={
            <AllList items={items} handleDeleteItem={handleDeleteItem} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
