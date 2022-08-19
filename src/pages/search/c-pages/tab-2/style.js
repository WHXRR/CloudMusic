import styled from "styled-components";

export const TabStyle = styled.div`
  .item {
    cursor: pointer;
    display: grid;
    align-items: center;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    padding: 10px 15px;
    margin-bottom: 5px;
    font-size: 12px;
    font-weight: 540;
    border-radius: 5px;
    transition: all .3s;
    :nth-child(odd) {
      background-color: #f7f7f7;
    }
    :hover {
      color: #fff;
      background-color: #00badb;
    }
  }
`