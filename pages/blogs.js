import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

function Blogs() {
    return(
        <Layout>
            <h1>Blogs</h1>
            <Link href="/">To Home</Link>
        </Layout>
    )
};

export default Blogs;

export const getServerProps = async (ctx) => {

}