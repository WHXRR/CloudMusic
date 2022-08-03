import styled from "styled-components";

export const SongItem = styled.div`
  cursor: pointer;
  position: relative;
  padding: 10px;
  border-radius: 6px;
  transition: all .5s;
  :hover {
    box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
    .hot-img img {
      transform: scale(1.2);
    }
    .play-icon {
      opacity: 1;
    }
  }
  .hot {
    display: flex;
    gap: 10px;
    .hot-img {
      width: 150px;
      height: 150px;
      flex-shrink: 0;
      overflow: hidden;
    }
    img {
      width: 100%;
      height: 100%;
      transition: all .5s;
    }
    .info {
      display: flex;
      gap: 5px;
      flex-direction: column;
      .hot-title {
        color: #222;
        font-size: 16px;
        font-weight: 600;
        font-style: italic;
        transition: color .3s;
      }
      .singer-name {
        color: #999;
        font-style: italic;
      }
    }
  }
  .icon {
    padding-right: 5px;
  }
  .play-icon {
    position: absolute;
    right: 10px;
    bottom: 10px;
    opacity: 0;
    color: #00badb;
    font-size: 24px;
    transition: all .5s;
  }
`