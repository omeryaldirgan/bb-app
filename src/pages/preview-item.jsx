import React from 'react';
import axios from 'axios'
import Nav from '../components/nav'
import Button from '../components/button'
import RightPreview from '../components/right-preview'

import './preview-item.scss'

class PreviewItem extends React.Component{
  constructor(props){
    super(props)
    this.state={
      item:[]
    }
  }
  componentDidMount(){
    axios.get(`http://localhost:3000/product?slug=${this.props.match.params.id}`).
    then(res => 
    {this.setState({item: res.data[0]});});
  }
  render(){
    const {name,description,imgUrl,price1,stock}=this.state.item;
    return(
      <div>
      <Nav>PRODUCT LIST</Nav>
      <div className="container">
      <div className="col product">
              <div className="product__top sizing-top">
                  <div className="product__header">
                  <h1 className="product__title">{name}</h1>
                  <h3 className="product__price">{price1}<span className="product__price-unit" title="Galactic credits">$</span></h3>
              </div>
              <figure className="product__media">
                  <img alt="product" className="product__image" src={imgUrl}/>
              </figure>
        </div>
        <div className="product__column">
          <div className="product__buttons">
            <Button type="button">Add to cart</Button>
            <div className="product__info">
              <small>Minimum qty. {stock} units.</small>
            </div>
          </div>
          
      <h3 className="product__props-title">Features</h3>
          <ul className="product__props">
            <li>{description}</li>
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
    )
  }
}


export default PreviewItem;