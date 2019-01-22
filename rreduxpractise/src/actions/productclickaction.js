const productClickAction = function(product){
    console.log("ONE_USER_CLICKED action will broadcast with below payload")
    console.log(product)
    return(
        {
            type:"ONE_USER_CLICKED",
            payload:product
        }
    )
}

export default productClickAction