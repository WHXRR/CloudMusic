import styled from "styled-components";

export const PlayerStyle = styled.div`
  position: relative;
  .grey {
    color: #9b9b9b;
  }
  .mr-20 {
    margin-right: 20px;
  }
  .mr-3 {
    margin-right: 3px;
  }
  .pointer {
    cursor: pointer;
  }
  .white {
    color: #fff;
  }
  .content {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5px;
    padding: 7px 150px;
    background-color: #272727;
    box-shadow: 0px -2px 5px #272727, 0px 0px 0px #272727;
    transition: all .5s;
    .lock {
      position: absolute;
      top: -16px;
      right: 25px;
      color: #fff;
      width: 35px;
      height: 35px;
      font-size: 12px;
      background-color: #272727;
      border-radius: 50%;
      text-align: center;
      line-height: 26px;
      box-shadow: 0px -2px 5px #272727, 0px 0px 0px #272727;
    }
    .footer-content {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: #fff;
      overflow: hidden;
    }
    .icon {
      font-size: 24px;
    }
    .play-icon {
      font-size: 30px;
    }
    .song-info {
      align-self: stretch;
      display: flex;
      gap: 10px;
      align-items: center;
      padding-left: 20px;
      .song-img {
        display: inline-block;
        width: 36px;
        height: 36px;
        overflow: hidden;
        border-radius: 5px;
      }
      .singer {
        color: #fff;
        .singer-info {
          font-size: 12px;
          .singer-name {
            padding: 0 10px 0 20px;
          }
        }
        .progress {
          display: flex;
          align-items: center;
          width: 500px;
          font-size: 12px;
          .ant-slider {
            margin: 2px 5px 0 0;
          }
          .slider {
            flex: 1;
            .ant-slider-track {
              background-color: #00badb;
            }
            .ant-slider-handle {
              border-color: #00badb;
            }
          }
        }
      }
    }
  }
  .show {
    height: 50px;
  }
`

export const PlayListStyle = styled.div`
  width: 400px;
  margin: 0;
  list-style-type: none;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 2px;
  outline: none;
  color: #e2e2e2;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  .text-overflow {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .flex {
    display: flex;
    align-items: center;
  }
  .pointer {
    cursor: pointer;
  }
  .normal-text {
    font-size: 14px;
  }
  .font-bold {
    font-weight: bold;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;
    font-size: 12px;
    background: rgba(32, 32, 32, .9);
    border-bottom: 1px solid #000;
  }
  .song-item {
    cursor: pointer;
    display: grid;
    gap: 10px;
    grid-template-columns: 25px 1fr 100px 50px;
    align-items: center;
    padding: 6px 0;
    background-color: #1c1f1f;
    font-size: 12px;
    transition: all .3s;
    :hover {
      background-color: #141515;
    }
    .current-icon {
      color: #00badb;
      font-size: 16px;
    }
  }
`