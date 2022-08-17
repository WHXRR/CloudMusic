import styled from "styled-components";

export const DJContent = styled.div`
  cursor: pointer;
  position: relative;
  display: grid;
  gap: 20px;
  align-items: center;
  grid-template-columns: 60px 2fr 2fr 1fr 1fr 30px;
  padding: 8px 20px;
  margin-bottom: 10px;
  color: #333;
  font-size: 14px;
  border-radius: 5px;
  transition: all .3s;
  :hover {
    color: #00badb !important;
    background-color: #eee;
  }
  .grey {
    color: #999;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .font-bold {
    font-weight: 600;
  }
  .dj-img {
    width: 100%;
  }
  .category {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    padding: 2px 8px;
    color: #fff;
    font-size: 12px;
    font-style: italic;
    border-radius: 15px;
    background-color: #00badb;
  }
`