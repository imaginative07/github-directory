import React from 'react';

const Alert = ({ alert }) => {
    if(alert){ 
        return <div className={`alert alert-${`alert.button_type`}`}>
            <i className="fas fa-info-circle"></i> {alert ? alert.msg : null}
        </div>
    } else {
        return null;
    }
}

export default Alert;