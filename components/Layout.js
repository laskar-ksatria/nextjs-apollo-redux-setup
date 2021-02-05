import React from 'react';
import Styles from '../styles/Home.module.css';
import Head from './modules/Head';
import Footer from './modules/Footer';

function Layout({ children }) {

    return (
        <div className={Styles.container}>
            <Head />
            <main className={Styles.main}>
                { children }
            </main>
            <Footer styles={Styles} />
        </div>
    )
};

export default Layout;