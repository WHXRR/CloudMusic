import styled from "styled-components";

export const DescStyle = styled.div`
  .title {
    position: relative;
    padding: 10px;
    font-weight: bold;
    ::before {
      position: absolute;
      top: 14px;
      left: 0;
      width: 3px;
      height: 14px;
      content: '';
      background-color: #00badb;
    }
  }
  .content {
    color: #666;
    font-size: 12px;
    font-weight: 400;
    line-height: 25px;
  }
  .indent {
    text-indent: 2em;
  }
`