import React from 'react';
import { useSelector } from 'react-redux';

function HomeCompSample() {

    const { home_product } = useSelector(state => state.homeReducer);

    return (
        <div>
            <h2>Component Children</h2>
            {home_product ? JSON.stringify(home_product, null, 2) : "Tidak ada data"}
            {home_product ? 
                <>
                    <img src={home_product.product.images} alt="product" />
                </>
            : ""}
        </div>
    )
};

export default HomeCompSample;