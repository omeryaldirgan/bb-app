import React from "react";
import {withRouter} from 'react-router-dom'
import styles from './card.module.scss'

const Card=({name,price,imageUrl,slug,history,match})=>{
    const pr='product'
    return(
    <div className={styles.collection_item} onClick={()=>history.push(`${match.url}${pr}/${slug}`)}>
        <div className={styles.image} 
          style={{backgroundImage:`url(${imageUrl})`}}
        />
        <div className={styles.collection_footer}>
            <div className={styles.name}>{name}</div>
            <div className={styles.price}>{price + `$`}</div>
        </div>
    </div>
)}
export default  withRouter(Card);;