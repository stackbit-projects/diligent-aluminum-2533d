/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 13:19:22
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
import React from 'react';
import { Tags } from '@tryghost/helpers-gatsby'
import NewsQuery from './NewsQuery'
import { MetaData } from '../Meta'
import { PostCard } from './'
import { useStaticQuery, graphql } from 'gatsby'
import SectionTitle from '../Titles/SectionTitle';

const News = () => {
  const data = useStaticQuery(graphql`
    {
      allGhostPost(limit: 3, skip: 10, sort: {fields: created_at, order: DESC}) {
        edges {
          node {
            html
            title
            excerpt
            feature_image
            meta_description
            meta_title
            featured
            ghostId
            plaintext
            published_at
            created_at
            reading_time
            slug
            tags {
              name
              slug
              url
            }
            primary_author {
                profile_image
                url
                name
              }
            url
            id
          }
        }
      }
    }
  `)
  const posts = data.allGhostPost.edges

  return (
    <>
      <section className="py-20 my-10">
          <div className="relative px-4 pt-16 pb-20 bg-transparent sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="inset-0">
           <div className=" h-1/3 sm:h-2/3" />
         </div>
            <div className="relative mx-auto max-w-7xl">
           <div className="text-center">
          <SectionTitle title="Our Opinion" subtitle="The Greatest Folks Ever" body="This is who we work with." />
        </div>
           <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          {posts.map(({ node }) => (
            <PostCard key={node.id} post={node} />
                            ))}
        </div>

         </div>
          </div>
        </section>
    </>
)
};
export default News
