import styled from "styled-components";

export const ProfileStyle = styled.div`
  position: fixed;
  top: 200px;
  right: 0;
  padding: 10px;
  transform: translateX(175px);
  color: #666;
  text-align: center;
  border-radius: 5px 0 0 5px;
  border: 1px solid #e4e4e4;
  background-color: rgba(241, 242, 243, .9);
  transition: all .4s;
  :hover {
    transform: translateX(0);
    background-color: rgba(255, 255, 255, .8);
    .left {
      transform: rotate(540deg);
    }
  }
  a {
    color: #666;
  }
  .font-bold {
    font-weight: bold;
  }
  .left {
    position: absolute;
    top: 45%;
    left: 5px;
    transform: translateY(-50%);
    transition: all .1s;
    transform: rotate(360deg);
  }
  .info {
    display: flex;
    align-items: center;
    padding-top: 10px;
    .info-item {
      cursor: pointer;
      padding: 0 15px;
      :nth-child(2) {
        border-left: 1px solid #e4e4e4;
        border-right: 1px solid #e4e4e4;
      }
      .info-label {
        font-style: italic;
      }
    }
  }
`