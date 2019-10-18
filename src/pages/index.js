import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import Head from '../components/head';
import Layout from '../components/layout';
import indexStyles from './index.module.scss';

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
            <h2>{data.site.siteMetadata.author}</h2>
            <h6 className={indexStyles.subscript}>(Yep! It's a nom de plume.)</h6>
            <div className={indexStyles.container}>
            <h3>I used Gatsby for this site.</h3>
            <p>Gatsby is a framework for creating blazing fast websites and web applications.
                Powered by React and GraphQL, Gatsby gives you everything you need to build and launch 
                your next project.
            </p>
            <div>
                <p>With Gatsby, you can create:</p>
                <ol>
                    <li>A personal site with a blog powered by markdown.</li>
                    <li>A complex company website powered by a CMS such as Contentful or WordPress.</li>
                    <li>A cutting-edge web application with authentication, data storage, and more.</li>
                </ol>
                </div> 
            <p>Need a developer? <Link to="/contact">Contact Me.</Link></p>
            </div>
        </Layout>
    );
};
