import React from 'react'

export default function Modal() {


  
  return (
    <div className="modal">
      <div className="modal-content">
        <div className='modal-title'>
          <h1>Error</h1>
        </div>
        <div className='modal-body'>
          Something went wrong
        </div>
        <div className='modal-footer'>
          <button className='button'>Closed</button>
        </div>
      </div>
    </div>
  );
}

