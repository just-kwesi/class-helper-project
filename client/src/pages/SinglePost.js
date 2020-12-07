import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

function SinglePost(props) {
  const postId = props.match.params.postId;

  const {
    data: { getPost },
  } = useQuery(FETCH_POST_QUERY, {
    variables: {
      postId,
    },
  });

  let postMarkup;
  if (!getPost) {
    postMarkup = <p>Loading post...</p>;
  } else {
    const {
      id,
      body,
      createdAt,
      username,
      comments,
      likes,
      likeCount,
      commentCount,
    } = getPost;                           
  }
}

const FETCH_POST_QUERY = gql`
  query($postId: ID!) {
    getPost(postID: $postId) {
      id
      body
      createdAt
      username
      likeCount
      like {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default SinglePost;
