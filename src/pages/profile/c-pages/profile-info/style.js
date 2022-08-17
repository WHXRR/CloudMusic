import styled from "styled-components";

export const ProfileInfoStyle = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-start;
  .grey {
    color: #666;
  }
  .font-bold {
    font-weight: bold;
  }
  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
  }
  .info {
    flex: 1;
    .top {
      display: flex;
      gap: 10px;
      align-items: center;
      .name {
        font-size: 20px;
        font-weight: 600;
      }
      .level {
        cursor: pointer;
        padding: 0px 10px;
        color: #00badb;
        font-size: 12px;
        font-weight: bold;
        font-style: italic;
        border: 2px solid #00badb;
        border-radius: 10px;
        transition: all .5s;
        :hover {
          color: #fff;
          background-color: #00badb;
        }
      }
    }
    .grid {
      display: grid;
      gap: 20px;
      grid-template-columns: 1fr 1fr 1fr;
      font-weight: 600;
      line-height: 28px;
    }
  }
`

export const LevelContentStyle = styled.div`
  color: #999;
  font-size: 12px;
  line-height: 20px;
  .red {
    color: #f75757;
  }
  .font-bold {
    font-weight: bold;
  }
`