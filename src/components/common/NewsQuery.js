/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 13:47:09
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
import React from "react"
import { StaticQuery, graphql } from "gatsby"

const NewsQuery = () => (
  <StaticQuery
    query={graphql`
      {
        allGhostPost(limit: 6, skip: 0, sort: {fields: created_at, order: DESC}) {
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
              url
              id
            }
          }
        }
      }
    `}
    render={data => <pre>{JSON.stringify(data, null, 6)}</pre>}
  ></StaticQuery>
)

export default NewsQuery;

