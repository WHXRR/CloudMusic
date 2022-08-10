import styled from "styled-components";

export const TopListStyle = styled.div`
  .line {
    position: fixed;
    top: 60px;
    left: 120px;
    z-index: 8;
    width: 2px;
    height: 80px;
    background-color: #666;
  }
  .all-list-btn {
    cursor: pointer;
    position: fixed;
    top: 100px;
    left: 50px;
    z-index: 9;
    padding: 8px;
    width: 138px;
    height: 138px;
    display: flex;
    gap: 5px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #666;
    font-size: 12px;
    text-align: center;
    border-radius: 50%;
    background-color: #fff;
    box-shadow:  20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
    animation: down 2s ease-in-out infinite;
    .icon {
      width: 37px;
      height: 37px;
    }
  }
  @keyframes down {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(15px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  .flex {
    display: flex;
    gap: 25px;
    align-items: flex-end;
  }
  .text-bold {
    color: #222;
    font-weight: bold;
    font-size: 14px;
  }
  .red {
    color: #c20c0c;
  }
  .description {
    width: 80%;
    margin: 10px 0;
    font-size: 12px;
    text-align: center;
    max-height: 300px;
    overflow: hidden;
    overflow-y: auto;
  }
  .table-top {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 5px 0;
    width: 80%;
    color: #666;
    border-bottom: 2px solid #00badb;
    .title {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .song-list-table {
    width: 80%;
  }
`

export const TopListItem = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  text-align: center;
  .item {
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    transition: all .3s;
    img {
      width: 80px;
      height: 80px;
    }
    .item-title {
      font-weight: bold;
    }
    .item-tips {
      color: #999999;
      font-size: 12px;
    }
    :hover {
      transform: scale(1.05);
      background-color: #e6e6e6;
    }
  }
`