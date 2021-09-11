import React from 'react'
import cl from "./Button.module.css";

const ButtonDelete = ({ children, ...props }) => {
    return (
        <button {...props} className={cl.BtnCancel}>
            {children}
        </button>
    )
}

export default ButtonDelete;