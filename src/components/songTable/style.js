import styled from "styled-components";

export const SongTableStyle = styled.div`
  .row {
    :hover {
      .text {
        opacity: 0;
      }
      .icon {
        opacity: 1;
      }
    }
  }
`

export const SongTableHover = styled.div`
  position: relative;
  cursor: pointer;
  height: 20px;
  line-height: 1;
  color: #b3b3b3;
  font-size: 14px;
  .text, .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all .6s;
  }
  .icon {
    display: flex;
    gap: 10px;
    opacity: 0;
    color: #00badb;
    font-size: 20px;
  }
`