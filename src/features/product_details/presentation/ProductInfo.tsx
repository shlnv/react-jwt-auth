import React from "react";
import './ProductPage.css';
const ProductInfo:React.FC = ()=>{
    return <div className="ProductInfo Body">

        <div className="ProductInfo CategoryRoute">
            {"Men/T-Shirt/Basic T-shirt"}
        </div>

        <div className="ProductInfo MainContainer">
            <div className="ProductInfo Photos">
                <div className="ProductInfo PhotosRow">
                    <img className="ProductInfo ProductPhoto"/>
                    <img className="ProductInfo ProductPhoto"/>
                </div>
                <div className="ProductInfo PhotosRow">
                    <img className="ProductInfo ProductPhoto"/>
                    <img className="ProductInfo ProductPhoto"/>
                </div>
            </div>
            <div className="ProductInfo ProductData">

            </div>
        </div>
    </div>;
}

export default ProductInfo