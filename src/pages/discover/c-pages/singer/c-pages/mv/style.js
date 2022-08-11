import styled from "styled-components";

export const MvItemStyle = styled.div`
  cursor: pointer;
  border-radius: 10px;
  transition: all .5s;
  :hover {
    transform: scale(1.03);
    box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
    .mv-img .play {
      color: #000;
    }
  }
  .mv-img {
    position: relative;
    height: 150px;
    overflow: hidden;
    .play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: '';
      font-size: 40px;
      color: rgba(0,0,0,.7);
      transition: all .5s;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .mv-name {
    padding: 3px 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .singer-name {
    padding: 0px 15px 5px 15px;
    color: #999;
    font-style: italic;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`