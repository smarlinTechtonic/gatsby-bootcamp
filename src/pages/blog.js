import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import blogStyles from './blog.module.scss';

export default () => {
    // The following Query is for Markdown posts
    // const data = useStaticQuery(graphql`
    //     query {
    //         allMarkdownRemark {
    //             edges {
    //                 node {
    //                     frontmatter {
    //                         title
    //                         date
    //                     }
    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `)
    const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: {
          fields: publishDate,
          order: DESC
        }
      ){
        edges {
          node {
            title
            slug
            publishDate(fromNow:true)
          }
        }
      }
    }
    `)
    
    return (
        // The following code is to render Markdown files
        // <Layout>
        //     <h1>Blog Posts</h1>
        //     <ol className={blogStyles.blogPosts}>
        //         {data.allMarkdownRemark.edges.map((edge) => {
        //             const blogLink = `/blog/${edge.node.fields.slug}`;
        //             return (
        //                 <li className={blogStyles.item} key={edge.node.frontmatter.title}>
        //                     <Link className={blogStyles.title} to={blogLink}>
        //                         <h2>{edge.node.frontmatter.title}</h2>
        //                         <p className={blogStyles.date}>{edge.node.frontmatter.date}</p>
        //                     </Link>
        //                 </li>
        //             )
        //         })}
        //     </ol>
        // </Layout>
        <Layout>
          <Head title="Blog" />
            <h1>
                Blog Posts
            </h1>
            <ol className={blogStyles.blogPosts}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    const blogLink = `/blog/${edge.node.slug}`
                    return (
                        <li className={blogStyles.item} key={edge.node.title}>
                        <Link className={blogStyles.title} to={blogLink}>
                            <h2>{edge.node.title}</h2>
                            <p className={blogStyles.date}>{edge.node.publishDate}</p>
                        </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}