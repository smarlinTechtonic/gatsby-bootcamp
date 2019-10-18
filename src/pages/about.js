import React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout'
import Head from '../components/head'

const aboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About me!</h1>
            <p><Link to="/contact">Contact Me</Link></p>
        </Layout>
    )
};

export default aboutPage