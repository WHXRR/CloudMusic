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
        }
      }
    }
  }
  .show {
    height: 50px;
  }
`