import React, { Component } from 'react';
import '../../assets/cartItem.scss';
import { connect } from 'react-redux';
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'

class CartItem extends Component{
    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render(){
        let addedItems = this.props.items.length ?
            ( 
                this.props.items.map(item=>{
                    return (
                        <div className="cart-card" key={item.id}>
                            <div className='cart-card-image'>
                                <img src={item.img_url+item.name} alt={item.name} onError={(e)=>{e.target.onerror = null; e.target.src="http://lorempixel.com/500/600/technics/Item1"}}/>
                            </div>
                            <div className='cart-card-detail'>
                                <div className="cart-item-name">{item.name}</div>
                                <div>&#8377;{item.price} <del style={{color:'gray'}}>900</del> <span style={{color:'green'}}>{item.discount}%off</span></div>
                            </div>
                            <div className="cart-item-input">
                                <span onClick={()=>{this.handleSubtractQuantity(item.id)}}><i className="fa fa-minus-circle" aria-hidden="true"></i></span>
                                <span><input type='number' value={item.quantity} readOnly/></span>
                                <span onClick={()=>{this.handleAddQuantity(item.id)}}><i className="fa fa-plus-circle" aria-hidden="true"></i></span>
                            </div>
                            <div className="cart-item-remove" onClick={()=>{this.handleRemove(item.id)}}><b>REMOVE</b></div>
                        </div>
                    )
                })
            ):
            (
               
               <p className="cart-card">Nothing.</p>
            );

        return(
            <div>
                {addedItems}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartItem)