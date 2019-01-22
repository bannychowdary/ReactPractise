import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators  } from "redux";
import productClickAction from "../actions/productclickaction";

class ProductNamesContainer extends React.Component {

    renderThePropsIReceived(){
        console.log("I have received the props from the store!!!!")
        console.log(this.props.myProducts)
        return this.props.myProducts.map((product)=>{
            return(
                <li key={product.id} 
                   onClick={()=>this.props.clickUserProp(product)} >
                    {product.name}
                </li>
            )
        })
    }

   
    render() { 
        return ( 
            <div>
                <h4><p>Product Names</p></h4>
                {this.renderThePropsIReceived()}
            </div>
         );
    }
}

function convertStoreToPropsNow(appstore){
    console.log(appstore)
    return{
        myProducts:appstore.products
    }
}

function mapPropsToActionsAndDispatch(dispatch){
    return bindActionCreators({
        clickUserProp:productClickAction
    }, dispatch)
}

 
export default connect(convertStoreToPropsNow, mapPropsToActionsAndDispatch )(ProductNamesContainer);