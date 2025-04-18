import "./assets/style/product.css"


const Product =() => {
    return(
        <>
            <div id="Con">
                <div id="imageOfProduct"></div>
                <div id="quanOfProduct">

                    <span>0</span>
                </div>
                <div id="btnOfProduct">
                    <button>+</button>
                    <button>-</button>
                </div>
                <div id="toBasket">
                    <button>Basket</button>
                </div>
            </div>
        </>
    )

}

export default Product
