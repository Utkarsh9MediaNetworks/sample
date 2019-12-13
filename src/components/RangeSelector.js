import React, { Component } from 'react';
import '../../assets/rangeSelector.scss';
import { connect } from 'react-redux';

class RangeSelector extends React.Component{
    constructor(props) {
      super(props);
    
      this.state = {
        rangeValue1:100,
        rangeValue2: 10000
      };
      this.onChangeRangeSlider = this.onChangeRangeSlider.bind(this);
      this.filterData = this.onfilterData.bind(this);
    }

    onChangeRangeSlider(e) {
      if (e.target.name === 'start') {
        this.setState({ rangeValue1: e.target.value });
      } else {
        this.setState({ rangeValue2: e.target.value });
      }
    }

    onfilterData(e){
      let start = this.state.rangeValue1;
      let end = this.state.rangeValue2;
      console.log('onfilterData', start,end )
      if (start && end && (start < end)) {
        let filterProducts = this.props.products.filter(product => { 
          if( product.price >= this.state.rangeValue1 && product.price <= this.state.rangeValue2) {
            return true;
          } 
        });
        this.setState({products: filterProducts})
      }
    }

    render(){
        return(
            <div className="form">
              <input type="number"  name="start"  onChange={this.onChangeRangeSlider} min="100" max="10000" placeholder="Min 100" style={{width:'100px', height:'30px',fontSize:'1rem',margin:'0 1%'}}/>
              <input type="number"  name="end"  onChange={this.onChangeRangeSlider} min="100" max="10000" placeholder="Max 10000" style={{width:'100px', height:'30px',fontSize:'1rem',margin:'0 1%'}}/>
              <button className="apply" onClick={this.filterData}>Apply</button>
            </div>
        )
    }
}


const mapStateToProps = state => ({
  products: state.items,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(RangeSelector)