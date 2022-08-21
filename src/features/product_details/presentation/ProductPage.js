import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProductAction} from "../redux/productActions";

const ProductPage = () => {
    let {id} = useParams();
    const dispatch = useDispatch();
    const {product} = useSelector(state => state);

    useEffect(()=>{
        console.log(id);
        dispatch(getProductAction(id));
    },[id]);
    return (product.loading)?<h1>Loading...</h1>:
        <div>{JSON.stringify(product.data)}</div>
};

export default ProductPage;
