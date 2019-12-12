import React, { Component } from 'react';
import '../../assets/rangeSelector.scss';

class RangeSelector extends React.Component{
    constructor(props) {
        super(props);
     
        this.state = {
          value: { min: 100, max: 10000 },
        };
      }

    render(){
        return(
            <form className="form">
                 <button className="apply">Apply</button>
            </form>
        )
    }
}

export default RangeSelector