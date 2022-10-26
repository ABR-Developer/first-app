import React from 'react'

export default function Alert(props) {
    
    const CapitalizeFirstLetter = (input) =>{
        const text = input.toLowerCase();
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    return (
    <div style={{height : "50px" }}>
        {
            props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade-shadow`}>
                <strong>{CapitalizeFirstLetter(props.alert.type)}</strong> - {props.alert.message}
            </div>
        }
    </div>
  )
}
