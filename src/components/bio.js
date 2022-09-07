/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const { author } = useStaticQuery(graphql`
    query BioQuery {
      # if there was more than one user, this would need to be filtered
      author: wpUser {
        firstName
        twitter: name
        description
        avatar {
          url
        }
      }
    }
  `)

  // (KS) Having the Twitter handle the same as the author name makes no sense.  Let's make that a constant.
  const twitterHandle = 'KeithInWPG'

  const avatarUrl = author?.avatar?.url

  return (
    <div className="bio">
      {avatarUrl && (
        <img
          alt={author?.firstName || ``}
          className="bio-avatar"
          src={avatarUrl}
        />
      )}
      {author?.firstName && (
        <p>
          Written by <strong>{author.firstName}</strong>
          {` `}
          {author?.description || null}
          {` `}
          {/* (KS) Use Twitter handle constant instead of the author name. */}
          {twitterHandle && (
            <a target="_blank" rel="noreferrer" href={`https://twitter.com/${twitterHandle}`}>
              You should follow them on Twitter
            </a>
          )}
        </p>
      )}
    </div>
  )
}

export default Bio
