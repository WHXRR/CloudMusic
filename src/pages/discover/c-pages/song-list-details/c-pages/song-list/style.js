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
  .red {
    color: #c20c0c;
  }
  .description {
    width: 70%;
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