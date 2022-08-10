import styled from "styled-components";

export const NewDiscStyle = styled.div`
  padding: 20px 50px;
  .selected {
    color: #fff !important;
    background-color: #00badb;
  }
  .top {
    display: flex;
    gap: 20px;
    .cate-title {
      flex-shrink: 0;
      font-weight: bold;
    }
    .cate-content {
      display: flex;
      gap: 10px;
      .item {
        cursor: pointer;
        padding: 0 8px;
        color: #999;
        border-radius: 4px;
        transition: all .3s;
        :hover {
          color: #fff;
          background-color: #00badb;
        }
      }
    }
  }
`