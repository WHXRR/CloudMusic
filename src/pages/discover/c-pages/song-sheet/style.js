import styled from "styled-components";

export const SongSheetStyle = styled.div`
  padding: 20px 50px;
`

export const CateItemStyle = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
  .selected {
    color: #fff !important;
    background-color: #00badb;
  }
  .cate-title {
    flex-shrink: 0;
    font-weight: bold;
  }
  .sub {
    cursor: pointer;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    .sub-item {
      padding: 0 8px;
      color: #999;
      border-radius: 4px;
      transition: all .3s;
      :hover {
        color: #fff;
        background-color: #00badb;
      }
    }
  }
`