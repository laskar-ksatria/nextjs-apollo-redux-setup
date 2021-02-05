import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import ShopComp from '../components/pages/shop/ShopComp';

function ShopPage() {
    return (
        <Layout>
            <h1>Shop</h1>
            <Link href="/">To Home</Link>
            <ShopComp />
        </Layout>
    )
};

export default ShopPage;