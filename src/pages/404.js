import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';


const pageNotFound = () => {
    return (
        <Layout>
            <Head title="Not Found" />
            <div>
                <h1>Page not found!</h1>
                <Link to="/">Back to Home Page</Link>
            </div>
        </Layout>
        
    )
}

export default pageNotFound;