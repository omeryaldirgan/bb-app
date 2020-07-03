import React from "react";
import styles from './button.module.scss'
const Button=({children,onClick,...props})=>(
   <button onClick={onClick} className={styles.button} {...props}>{children}</button>
)

export default Button;