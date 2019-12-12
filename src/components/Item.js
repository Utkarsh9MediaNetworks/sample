import React, { Component } from 'react';
import '../../assets/item.scss';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions'

class Item extends Component{
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        return(
            <div className="card" key={this.props.item.id}>
                <div className="card-image">
                    <img src={this.props.item.img_url+this.props.item.name} alt={this.props.item.name} onError={(e)=>{e.target.onerror = null; e.target.src="http://lorempixel.com/500/600/technics/Item1"}}/>
                </div>
                <div className="item-name">{this.props.item.name}</div>
                <div>&#8377;{this.props.item.price} <del style={{color:'gray'}}>900</del> <span style={{color:'green'}}>{this.props.item.discount}%off</span></div>
                <div style={{margin:'auto 0'}}><button className="addtocart" onClick={()=>{this.handleClick(this.props.item.id)}}>Add To Cart</button></div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Item)