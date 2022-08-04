import styled from "styled-components";

export const SongInfo = styled.div`
  position: relative;
  overflow: hidden;
  height: calc(100vh - 62px);
  padding: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  .grey {
    color: #999;
  }
  .link {
    color: #0c73c2;
  }
  .text-center {
    text-align: center;
  }
  @keyframes rote {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .song-img {
    width: 200px;
    height: 200px;
    border: 30px solid #010101;
    border-radius: 50%;
    animation: rote 8s linear infinite;
  }
  .song-name {
    font-size: 24px;
    font-weight: bold;
  }
  .btns {
    display: flex;
    gap: 10px;
  }
  .lyric {
    height: 500px;
    overflow: hidden;
    overflow-y: auto;
    text-align: center;
    line-height: 30px;
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${props => props.backgroundImg});
    background-size: cover;
    filter: blur(50px);
    transform: scale(3);
    z-index: -1;
  }
`
export const CommentInfo = styled.div`
  padding: 20px 50px;
`

export const OtherInfo = styled.div`
  padding: 20px 50px;
`
