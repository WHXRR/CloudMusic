import styled from "styled-components";

export const PlayerStyle = styled.div`
  .content {
    cursor: pointer;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5px;
    background-color: #000;
    box-shadow: 0px -2px 5px #000, 0px 0px 0px #000;
    transition: all .4s;
  }
  .show {
    height: 50px;
  }
`