import React, { useState, useEffect, useReducer } from "react";
import Modal from "./Modal";
import { reducer, defaultState } from "./reducer";
// reducer function

const App = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      dispatch({ type: "NO_VALUE" });
    } else {
      const newPerson = {
        id: new Date().getTime().toString(),
        name: name,
      };
      dispatch({ type: "ADD_VALUE", payload: newPerson });
      setName('');
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <div className="container">
      {state.showModal && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn">Add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              type="button"
              onClick={() =>
                dispatch({ type: "REMOVE_VALUE", payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
