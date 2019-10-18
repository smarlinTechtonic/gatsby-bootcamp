import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import Head from '../components/head';
import Layout from '../components/layout';

export default () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `);

    return (
        <Layout>
            <Head title="Home" />
            <h1>{data.site.siteMetadata.author}</h1>
            <h2>Learning Gatsby (Again!). Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
            <p>Need a developer? <Link to="/contact">Contact Me.</Link></p>
        </Layout>
    );
};
