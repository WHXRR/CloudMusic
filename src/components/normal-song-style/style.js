import styled from "styled-components";

export const HotItem = styled.div`
  cursor: pointer;
  width: 150px;
  :hover {
    .hot-title {
      color: #00badb;
    }
    .hot-img img {
      transform: scale(1.2);
    }
    .hot-img .mantle {
      font-weight: bold;
      background-color: rgba(230, 255, 255, .8);
    }
  }
  .hot-img {
    position: relative;
    height: 150px;
    margin-bottom: 6px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all .5s;
    }
    .mantle {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: space-between;
      padding: 5px 10px;
      transition: all .5s;
      color: #00badb;
      background-color: rgba(0, 0, 0, .5);
      .icon {
        font-size: 16px;
      }
    }
  }
  .hot-title {
    color: #222;
    font-style: italic;
    transition: color .3s;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .singer-name {
    color: #999;
    font-style: italic;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`