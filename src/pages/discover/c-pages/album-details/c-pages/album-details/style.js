import styled from "styled-components";

export const SongListDetailStyle = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
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