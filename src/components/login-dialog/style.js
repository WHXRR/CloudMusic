import styled from "styled-components";

export const LoginDialogStyle = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1c3b67;
    img {
      width: 70%;
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 130px 0;
    .form {
      width: 60%;
      .title {
        padding-bottom: 40px;
        font-size: 22px;
        font-weight: 600;
        text-align: center;
        .music {
          max-width: 80px;
          vertical-align: bottom;
        }
      }
      .login-btn {
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
`
