import React from 'react'
import './modal.css'

const modal = ({show, Close, children}) => {
    if(!show){
        return null
    }
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={Close}>Fechar</button>
        {children}
      </div>
    </div>
  );
};

export default modal