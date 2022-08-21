import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProductAction, getRecommendedAction} from "../redux/productActions";
import {Store} from "../../../redux/types";
import Product from "../data/model/Product";
import Footer from "../../../general/footer/Footer";
import ProductInfo from "./ProductInfo";
import NewsSubscribeSection from "./NewsSubscribeSection";
import RecommendedSection from "./RecommendedSection";

const ProductPage:React.FC = () => {
    let {id} = useParams<string>();
    let [pageRecommended, setPageRecommended] = useState<number>(1)

    const dispatch = useDispatch();
    const product = useSelector<Store, Product>(state => state.product.data);
    const loading = useSelector<Store, Boolean>(state => state.product.loading);

    useEffect(()=>{
        console.log(id);
        dispatch(getProductAction(id as string));
    },[id]);

    useEffect(()=>{
            dispatch(getRecommendedAction(pageRecommended));
        },[pageRecommended]
    )
    return (loading)?<h1>Loading...</h1>:
        <div>
            <ProductInfo/>
            <RecommendedSection/>
            <NewsSubscribeSection/>
            <Footer/>
        </div>
};

export default ProductPage;
