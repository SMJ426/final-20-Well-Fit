import React from 'react';
import { styled } from 'styled-components';
import PostCommentItem from './PostCommentItem';

const StyledPostCommentList = styled.section`
  padding: 20px 16px;
  height: 235px;
  overflow-y: scroll;
`;

export default function PostCommentList({ commentList }) {
  console.log(commentList);
  return (
    <StyledPostCommentList>
      <ol>
        {commentList.map((comment) => {
          return <PostCommentItem {...comment} key={comment.id} />;
        })}
      </ol>
    </StyledPostCommentList>
  );
}
