import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({items, removeItem, editItem}) => {
  return (
    <div className='list'>
      {items.map((item) => {
        const {id,title} = item;
        return (
          <article key={id} className='list-object'>
            <p className='title'> • {title}</p>
            <div className='container-list-button'>
              <button type='button' className='edit-button' onClick={() => editItem(id)}>
                <FaEdit />
              </button>
              <button type='button' className='remove-button' 
                onClick={() => removeItem(id)}>
                <FaTrash />
              </button>
            </div>
          </article>
        )
      }
      )}

    </div>
  );
}

export default List
