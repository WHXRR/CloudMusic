import styled from "styled-components";

export const LookMoreStyle = styled.div`
  position: relative;
  font-size: ${props => props.fontSize ? props.fontSize : '14px'};
  .mr-5 {
    margin-right: 5px;
  }
  .old-color {
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 50%;
    display: flex;
    align-items: center;
    transform: translate(-50%, 0);
    color: ${props => props.initColor ? props.initColor : '#878787'};
    .animation {
      animation: move ${props => props.speed ? props.speed : '3s'} infinite;
    }
    .transition {
      transition: all ${props => props.speed ? props.speed : '1s'};
    }
    .new-color {
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      display: flex;
      align-items: center;
      color: ${props => props.fillColor ? props.fillColor : '#00badb'};
      white-space: nowrap;
      overflow: hidden;
    }
    :hover .new-color {
      width: 100%;
    }
  }
  @keyframes move {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`