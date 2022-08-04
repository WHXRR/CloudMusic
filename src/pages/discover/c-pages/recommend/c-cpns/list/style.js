import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
`

export const ListItem = styled.div`
  .ant-card-body {
    padding: 0;
  }
  .title {
    padding: 20px 0;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
  .song-item {
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    &:nth-child(odd) {
      background-color: #e8e8e8;
    }
    :hover {
      .icon {
        opacity: 1;
      }
    }
    .num {
      width: 20px;
      height: 20px;
      font-size: 12px;
      font-weight: bold;
      text-align: center;
      border-radius: 50%;
      margin-right: 10px;
    }
    .top-few {
      color: #fff;
      background-color: #00badb;
    }
    .song-name {
      width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .icon {
      opacity: 0;
      color: #00badb;
      font-size: 20px;
      transition: all .3s;
    }
  }
`