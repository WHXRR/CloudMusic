import styled from "styled-components";

export const DJStyle = styled.div`
  .cate-list {
    display: grid;
    row-gap: 20px;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(9, 1fr);
    padding: 20px 0;
    text-align: center;
  }
  .selected {
    color: #d35757 !important;
    border: 2px solid #db5e5e;
    :hover {
      background-color: #fff;
    }
    .cate-img {
      background-position: top right;
    }
  }
  .content {
    padding: 0 40px 10px 40px;
    .title {
      padding-top: 30px;
      font-size: 20px;
      font-weight: bold;
    }
    .item {
      position: relative;
    }
    .tips {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
        z-index: 9;
        content: '';
        padding: 4px 8px;
        border-radius: 10px;
        color: #fff;
        font-size: 12px;
        line-height: 1;
        background-color: #00badb;
    }
    .desc {
      color: #666;
      font-size: 12px;
    }
  }
`

export const DJCateItem = styled.div`
  cursor: pointer;
  padding: 3px 12px;
  color: #888;
  font-size: 12px;
  border-radius: 6px;
  border: 2px solid transparent;
  transition: all .3s;
  .cate-img {
    width: 50px;
    height: 50px;
    margin: 0 auto;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: cover;
  }
  :hover {
    background-color: #f6f7f7;
  }
`