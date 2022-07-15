export const reducer = (state, action) => {
  if (action.type === "CLOSE_MODAL") {
    return { ...state, showModal: false };
  }
  if (action.type === "NO_VALUE") {
    return { ...state, showModal: true, modalContent: "Please enter a value" };
  }
  if (action.type === "ADD_VALUE") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      showModal: true,
      modalContent: "Added new item",
    };
  }
  if (action.type === "REMOVE_VALUE") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople,
      showModal: true,
      modalContent: "Removed item",
    };
  }
  throw new Error("no matching action type");
};

export const defaultState = {
  people: [],
  showModal: false,
  modalContent: "",
};
