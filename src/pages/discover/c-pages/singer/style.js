import styled from "styled-components";

export const SingerStyle = styled.div`
  padding: 20px 50px;
  .selected {
    color: #fff !important;
    background-color: #00badb;
  }
  .cate-item {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
    .cate-title {
      flex-shrink: 0;
      font-weight: bold;
    }
    .cate-content {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
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
  .singer-item {
    cursor: pointer;
    padding: 10px 5px;
    display: block;
    color: #000;
    text-align: center;
    transition: all .3s;
    :hover {
      transform: scale(1.03);
      border-radius: 5px;
      box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
    }
    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      margin-bottom: 10px;
      white-space: nowrap;
      border-radius: 50%;
    }
    .singer-name {
      font-weight: 600;
    }
  }
`

export const HoverStyle = styled.div`
  text-align: center;
  img {
    width: 200px;
    height: 100px;
    object-fit: cover;
  }
  .name {
    padding: 4px 0;
    font-size: 12px;
    font-weight: bold;
    font-style: italic;
  }
`