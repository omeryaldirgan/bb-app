import React from "react";
import styles from './input.module.scss'
const Input=({...props})=>(
   <input className={styles.input} {...props} />
)

export default Input;