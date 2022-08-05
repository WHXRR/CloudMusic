import styled from "styled-components";

export const Title = styled.div`
  padding-bottom: 30px;
  .top-title {
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
    color: #00badb;
    font-size: 25px;
    ::after, ::before {
      content: "";
      display: inline-block;
      vertical-align: middle;
      width: 60px;
      height: 2px;
      background: #00badb;
    }
  }
  .sub-title {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #878787;
    font-style: italic;
    font-size: 14px;
    font-weight: 400;
  }
`

export const GreyBG = styled.div`
  background-color: #f5f5f5;
`

export const Container = styled.div`
  padding: 30px 0;
`