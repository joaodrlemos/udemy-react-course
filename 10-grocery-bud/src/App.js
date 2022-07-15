import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  const listSt = localStorage.getItem('list');
  if (listSt) {
    return JSON.parse(listSt);
  }
  else {
    return [];
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      // display alert
      showAlert(true, 'please enter value', 'danger');
    }
    else if (name && isEditing) {
      // deal with the edit
      setList(list.map((item) => {
        if (item.id === editID) {
          item.title = name;
        }
        return item;
      }))

      setEditID(null);
      setName('');
      setIsEditing(false);
      showAlert(true, 'edited successfully', 'success');

    }
    else {
      // show alert
      showAlert(true, 'item added', 'success');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  }

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show: show, msg: msg, type: type });
  }

  const removelistItem = (id) => {
    if(!isEditing){
      showAlert(true, 'Removed item', 'success');
      setList(list.filter((item) => item.id !== id));
    }
    else {
      showAlert(true, 'can\'t remove item while editing', 'danger');
    }
  }

  const editlistItem = (id) => {
    console.log(`editing item with id: ${id}`);

    const selectedElem = list.find((item) => item.id === id);

    setName(selectedElem.title);
    setEditID(selectedElem.id);
    setIsEditing(true);
  }

  const clearList = () => {
    showAlert(true, 'list cleared', 'danger');
    setList([]);
  }

useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
}, [list])

  return (
    <div>
      <div style={{height:'75px'}} className='alert'>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
      </div>
      <section className='container'>
        <h3>Grocery Bud</h3>
        <form className='container-form' onSubmit={handleSubmit}>
          <div className='input-area'>
            <input type='text' className='input' placeholder='eg. eggs' value={name} onChange={(e) => setName(e.target.value)}></input>
            <button type='submit' className='submit-edit-button'>
              {isEditing ? 'edit' : 'submit'}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className='container-list'>
            <List items={list} removeItem={removelistItem} editItem={editlistItem} />
            <button className='clear-button' onClick={clearList}>
              clear items
            </button>
          </div>
        )}

      </section>
    </div>
  );
}

export default App
