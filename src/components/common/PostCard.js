/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 14:05:30
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '../Tags/index.js'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import "./PostCard.scoped.scss";

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`;
    const readingTime = readingTimeHelper(post);

    return (
        <>
        <div className="rounded shadow glass">

              <div key={post.title} className="flex flex-col overflow-hidden">

                {post.feature_image &&
                        <div className="flex-shrink-0">
                <Link to={url}>   <img className="object-cover w-full h-48 top-left-and-right-rounded overflow:hidden grayscale" src={post.feature_image} alt={post.title} /></Link>
                </div>   }
                <div className="flex flex-col justify-between flex-1 p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-500">
                    <Tags post={post} visibility="public" autolink={true} />
                    </p>
                    <a href={post.href} className="block mt-2">
                    <Link to={url} className="wave-link">    <h2 className="text-3xl font-semibold leading-tight text-white underline dincondensed wave-link">{post.title}</h2></Link>
                         <Link to={url}>  <p className="mt-3 text-base text-gray-500 roboto">{post.excerpt}</p></Link>
                    </a>
                  </div>
                  <div className="flex items-center mt-6">
                    <div className="flex-shrink-0">
                      <a href={post.primary_author.url}>
                        <span className="sr-only">{post.primary_author.name}</span>
                        <img className="w-10 h-10 rounded-full" src={post.primary_author.profile_image} alt="" />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="leading-tight text-gray-900 text-tiny">
                        <a href={post.primary_author.url} className="hover:underline">
                        {post.primary_author.name}
                        </a>

                      <div className="flex leading-tight text-gray-500 text-tiny">
                        <time dateTime={post.datetime}>{post.datetime}</time>
                        <span>{readingTime} read</span>
                      </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    </>
            );};

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default PostCard
