import React from "react";

function PizzaForm({pizzaEdit, handleFormSubmit, handleNameChange, handleRadioChange}) {

  // function handleNameChange (event) {
  //   pizzaEdit.name = event.target.value
  //   console.log(pizzaEdit)
  // }
  
  return (
    <form onSubmit={(e) => handleFormSubmit(e, pizzaEdit)}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={pizzaEdit.topping}
            onChange={handleNameChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={pizzaEdit.size} onChange={handleNameChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={pizzaEdit.topping === null ? false : pizzaEdit.vegetarian === true}
              // checked={pizzaEdit.vegetarian}
              onChange={handleRadioChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={pizzaEdit.topping === null ? false : pizzaEdit.vegetarian === false}
              // checked={pizzaEdit.vegetarian}
              onChange={handleRadioChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
