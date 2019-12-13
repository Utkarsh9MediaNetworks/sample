import React, { Component } from 'react';
import '../../assets/home.scss';
import Item from './Item';
import RangeSelector from './RangeSelector';
import { connect } from 'react-redux';
import { fetchProducts,sortPrizeHigh,sortPrizeLow,sortDiscount } from "./actions/cartActions";

class Home extends React.Component{

    constructor(props) {
		super(props);
	}

    sortPriceH2L = () => {
        let sortedH2LItems = this.props.products.sort((a,b)=>{return b.price-a.price});
        this.setState({products: sortedH2LItems})
    }

    sortPriceL2H = () => {
        let sortedL2HItems = this.state.products.sort((a,b)=>{return a.price-b.price});
        this.setState({products: sortedL2HItems})
    }
    
    sortDiscount = () => {
        let sortDiscount = this.state.products.sort((a,b)=>{return b.discount-a.discount});
        this.setState({products: sortDiscount})
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    render(){
        const { error, loading, products } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }
        if (products) {
            console.log('Home-render',products)
        }
        return (
            <div className="sections">
                <section className="section1">
                    <div className="sortsection1Desktop"><i className="fa fa-sort" aria-hidden="true"></i>Sort</div>
                    <div className="filter">
                        <span className="filterDesktop">Filter
                            <div className="filterSelector">
                                <RangeSelector />
                            </div>
                        </span>
                        <span className="filterphone"><i className="fa fa-filter" aria-hidden="true"></i>Filter</span>
                        
                    </div>
                </section>
                <section className="section2">
                    <div className="sortsection2Desktop"><b>Sort</b>
                        <span className="sort-item" onClick={()=>{this.sortPriceH2L()}}>Price -- High Low</span>
                        <span className="sort-item" onClick={()=>{this.sortPriceL2H()}}>Price -- Low High</span>
                        <span className="sort-item" onClick={()=>{this.sortDiscount()}}>Discount</span>
                    </div>
                    <div className="section2-body">
                    {products.map(product =>
                        <Item key={product.id} item={product}/>
                    )}
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.items,
    loading: state.loading,
    error: state.error
  });

  const mapDispatchToProps = (dispatch)=>{
    return{
        fetchProducts:()=>{dispatch(fetchProducts())},
        sortPrizeHigh: ()=>{dispatch(sortPrizeHigh())},
        sortPrizeLow: ()=>{dispatch(sortPrizeLow())},
        sortDiscount: ()=>{dispatch(sortDiscount())}
    }
}

  export default connect(mapStateToProps,mapDispatchToProps)(Home)