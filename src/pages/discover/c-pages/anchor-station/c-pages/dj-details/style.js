import styled from "styled-components";

export const DJDetailsStyle = styled.div`
  padding: 20px 50px;
  .flex {
    display: flex;
    align-items: center;
  }
  .font-bold {
    font-weight: 600;
  }
  .grey {
    color: #999;
  }
  .top {
    display: flex;
    gap: 30px;
    .dj-img {
      width: 300px;
      height: 300px;
      object-fit: cover;
    }
    .details {
      flex: 1;
      display: flex;
      gap: 15px;
      flex-direction: column;
      .cate {
        position: relative;
        padding: 2px 10px;
        color: #fff;
        font-size: 12px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        background-color: #00badb;
        ::after {
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(100%);
          content: '';
          border: 11px solid #00badb;
          border-top-color: transparent;
          border-right-color: transparent;
          border-bottom-color: transparent;
        }
      }
      .dj-name {
        padding-left: 20px;
        font-size: 24px;
        font-weight: 600;
      }
      .user {
        display: flex;
        gap: 3px;
        align-items: center;
        .user-img {
          width: 50px;
          margin-right: 10px;
        }
      }
      .desc {
        color: #666;
        font-size: 12px;
      }
    }
  }
  .center {
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 0 10px 0;
      border-bottom: 2px solid #00badb;
      .option-icon {
        cursor: pointer;
        margin-left: 15px;
        font-size: 20px;
        transition: all .3s;
        :hover {
          color: #00badb;
        }
      }
      .selected {
        color: #00badb;
      }
    }
    .program-item {
      cursor: pointer;
      display: grid;
      gap: 20px;
      grid-template-columns: 50px 2fr 1fr 1fr 100px 50px;
      padding: 20px 15px;
      color: #666;
      font-weight: 500;
      font-size: 12px;
      transition: all .3s;
      :nth-child(odd) {
        background-color: #f7f7f7;
      }
      :hover {
        color: #fff;
        background-color: rgba(0, 186, 219, .7);
        .text {
          opacity: 0;
        }
        .icon {
          opacity: 1;
        }
      }
      .index {
        position: relative;
      }
      .text, .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all .6s;
      }
      .icon {
        display: flex;
        gap: 10px;
        opacity: 0;
        color: #fff;
        font-size: 20px;
      }
    }
  }
`