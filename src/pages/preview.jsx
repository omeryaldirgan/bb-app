import React from 'react';

import axios from 'axios';
import Card from '../components/card'
import Button from '../components/button'
import './preview.scss'


class Preview extends React.Component{
   constructor(props){
      super(props);
      this.state={
        updatePrice:1,
        items:[]
      }
      this.handleClick=this.handleClick.bind(this)
   }
   componentDidMount(){
    axios
      .get('http://localhost:3000/product')
      .then(({ data })=> {
        this.setState(
          { items: data }
        );
      })
      .catch((err)=> {console.log(err)})
  }
   handleClick=()=>{
        if(this.state.updatePrice==1){
          this.setState({updatePrice:2})
        }else if(this.state.updatePrice==2){
            this.setState({updatePrice:3})
        }else{
            this.setState({updatePrice:1})
        }
    }
    render(){
        const {items}=this.state;
        return(
            <div>
            <div className="header">
                <Button style={{margin:'1rem'}} onClick={this.handleClick}>Price Change</Button>
            </div>
                <div className="preview">
                        {
                        items.map((item,inx) =>(
                            <Card
                                key={inx}
                                imageUrl={item.imgUrl}
                                name={item.name}
                                price={(this.state.updatePrice === 1 ? item.price1 : (this.state.updatePrice === 2 ? item.price2 : item.price3))}
                                slug={item.slug}
                            />
                        ))
                        }
                </div>
        </div>
        )
    }
}
export default Preview;