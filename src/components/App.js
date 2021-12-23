import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [ pizzas, setPizzas] = useState([])
  const [ pizzaEdit, setPizzaEdit] = useState({ topping : "",
  size: "",
  vegetarian: null })
  const [ patchInitiated, setPatchInitiation] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then(r => r.json())
    .then(data => setPizzas(data))
  }, [patchInitiated])


  function handleFormSubmit (event, updatedObj) {
    event.preventDefault()
    fetch(`http://localhost:3001/pizzas/${updatedObj.id}`, {
      method : "PATCH",
      headers : {'Content-Type': 'application/json'},
      body : JSON.stringify(updatedObj)
    })
    .then(r => r.json())
    .then(data => setPatchInitiation(!patchInitiated))
  }

  function handleNameChange (event) {
    setPizzaEdit({
      ...pizzaEdit,
      [event.target.name] : event.target.value
    })
  }

  function handleRadioChange (event) {
    setPizzaEdit({
      ...pizzaEdit,
      vegetarian : (event.target.value === "Vegetarian" ? true : false)
    })
  }

  return (
    <>
      <Header />
      <PizzaForm pizzaEdit={pizzaEdit} handleFormSubmit={handleFormSubmit} handleNameChange={handleNameChange} handleRadioChange={handleRadioChange}/>
      <PizzaList onSelectPizza={setPizzaEdit} pizzas={pizzas}/>
    </>
  );
}

export default App;
