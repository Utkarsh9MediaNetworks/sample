import React, { Component } from 'react';
import '../../assets/pricedetails.scss';
import { connect } from 'react-redux';

class PriceDetails extends React.Component{
    calculateDiscount = ()=>{
        let discount = 0;
        this.props.items.map((item)=>{
            discount += item.price*(item.discount/100);
        });
        return discount;
    };

    render(){
        let totalitems = this.props.items.length;
        let actualAmount = this.props.total;
        let discountAmount = this.calculateDiscount();
        let totalAmount = actualAmount - discountAmount;

        return(
            <div className="price-data">
                <div className='priceDetails-heading'>PRICE DETAILS</div>
                <div className='priceDetails-data'>
                    <div>
                        <span className='price-data-section1'>Price ( {totalitems} item )</span>
                        <span className='price-data-section2'>:</span>
                        <span className='price-data-section3'>&#8377;{actualAmount}</span>
                    </div>
                    <div>
                        <span className='price-data-section1'>Discount</span>
                        <span className='price-data-section2'>:</span>
                        <span className='price-data-section3'>&#8377;{discountAmount}</span>
                    </div>
                </div>
                <div className='priceDetails-total'>
                    <span className='price-data-section1'>Total Payable</span>
                    <span className='price-data-section2'></span>
                    <span className='price-data-section3'>&#8377;{totalAmount}</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        items: state.addedItems,
        total: state.total
    }
}

export default connect(mapStateToProps)(PriceDetails)