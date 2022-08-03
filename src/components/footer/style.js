import styled from "styled-components";

export const FooterContent = styled.div`
  padding: 50px 50px 100px 50px;
  margin-top: 50px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f8;
  .icon {
    cursor: pointer;
    position: relative;
    width: 35px;
    height: 35px;
    .icon-item {
      color: #00badb;
      font-size: 35px;
      position: absolute;
      top: 0;
      left: 0;
      transition: all .3s;
    }
  }
  .un-selected {
    .item1 {
      transform: scale(0);
    }
    .item2 {
      transform: scale(1);
    }
  }
  .selected {
    .item1 {
      transform: scale(1);
    }
    .item2 {
      transform: scale(0);
    }
  }
`