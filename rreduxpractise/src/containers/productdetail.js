import React from 'react';
import { connect } from "react-redux";


class ProductDetailContainer extends React.Component {
    state = {  }
    render() { 
        if(this.props.activeProduct === null){
            return(
                <div>
                    <h4>Click the product to view details!!!!</h4>
                </div>
            )
        }else{
            return ( 
                <div>
                    <p>Click on product to view details!!!!</p>
                    {this.props.activeProduct.name}: {this.props.activeProduct.description}
                    <br></br>
                    Upvote: {this.props.activeProduct.upvote}
                    <br></br>
                    Downvote: {this.props.activeProduct.downvote}
                </div>
            );
        }
    }
}

function convertStoreToProps(store){
    return {
        activeProduct:store.clickedProduct
    }
}
 
export default connect(convertStoreToProps)(ProductDetailContainer);