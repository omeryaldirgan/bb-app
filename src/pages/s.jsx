import React from 'react';

import Nav from '../components/nav'
import Button from '../components/button'
import RightPreview from '../components/right-preview'

import './preview-item.scss'
const PreviewItem=(props)=>{
  console.log(props.match.params.id);
  console.log(props);
return(
  <div>
    <Nav>PRODUCT DETAIL</Nav>
    <div className="container">
    <div className="col product">
            <div className="product__top sizing-top">
                <div className="product__header">
                <h1 className="product__title">First Order</h1>
                <h3 className="product__price">120<span className="product__price-unit" title="Galactic credits">$</span></h3>
            </div>
            <figure className="product__media">
                <img alt="product" className="product__image" src="https://zupra.github.io/test/img/shop/7.jpg"/>
            </figure>
      </div>
      <div className="product__column">
        <div className="product__buttons">
          <Button type="button">Add to cart</Button>
          <div className="product__info">
            <small>Minimum qty. 10 000 units.</small>
          </div>
        </div>
        
    <h3 className="product__props-title">Features</h3>
        <ul className="product__props">
          <li>Five-layer construction</li>
        </ul>
      </div>
    </div>
    <RightPreview 
      imgUrl="https://contents.mediadecathlon.com/p1725005/k5e4dbf55fb6275ca78c7d038167d204d/1725005_default.jpg?format=auto&quality=60&f=800x0"
      text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      alt="lorem"
    />
    </div>
  </div>
)}

export default PreviewItem;