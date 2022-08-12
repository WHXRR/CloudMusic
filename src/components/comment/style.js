import styled from "styled-components";

export const CommentsStyle = styled.div`
  .like {
    color: #c20c0c;
  }
  .pointer {
    cursor: pointer;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .ant-comment-actions {
    li {
      width: 100%;
    }
  }
  .comment-list {
    padding-bottom: 20px;
  }
  .icon {
    color: #00badb;
  }
`

export const NameStyle = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`

export const SubCommentsStyle = styled.div`
  padding: 0 15px;
  border-radius: 5px;
  background-color: #f1f2f3;
`

export const ReplayStyle = styled.div`
  padding: 0 10px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: rgba(241, 242, 243, .3);
  box-shadow:  7px 7px 14px #eeeeee,-7px -7px 14px #ffffff;
  animation: comments 1s;
  @keyframes comments {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`