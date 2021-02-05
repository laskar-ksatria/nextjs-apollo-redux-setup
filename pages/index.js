import React from 'react';
//Utils
import Link from 'next/link';
import { initializeApollo } from '../lib/apollo';
import { initializeStore } from '../store';
import { getCookies } from 'cookies-next';
import { SET_HOME_PRODUCTS } from '../store';
//Components
import Layout from '../components/Layout';
import HomeCompSample from '../components/pages/home/HomeCompSample';
//import function 
import { GET_HOME_PRODUCT } from '../lib/queries'

function Home() {

  return (
    <Layout>
      <h1>Home</h1>
      <Link href="/shops">To ShopPage</Link>
      <Link href="/blogs">To BlogsPage</Link>
      <HomeCompSample />
    </Layout>
  )
};

export default Home;

//GET DATA IN SSR
export const getServerSideProps = async (ctx) => {
  const token = getCookies(ctx, "guest_token");
  const client = initializeApollo();
  const store = initializeStore();
  const data = await GET_HOME_PRODUCT(client, token);
  store.dispatch({type: SET_HOME_PRODUCTS, payload: data});
  return {
    props: {
      initialReduxState: store.getState(),
    }
  }
};



