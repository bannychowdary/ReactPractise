import React from 'react';

import ProductNamesContainer from '../containers/productname';
import ProductDetailContainer from '../containers/productdetail';

class HelloRedux extends React.Component {
    state = {  }
    render() { 
        return (
            <div> 
                <div>I will be the redux app!!!!</div>
                <ProductNamesContainer></ProductNamesContainer>
                <hr></hr>
                <ProductDetailContainer></ProductDetailContainer>
            </div> 
        );
    }
}
 
export default HelloRedux;