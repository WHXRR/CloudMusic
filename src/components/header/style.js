import styled from 'styled-components'

export const HearderWrapper = styled.div`
  padding: 0px 30px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff0f3;
  box-shadow: 5px 5px 10px #f2e4e7, -5px -5px 10px #fffcff;
  a {
    padding: 20px 10px;
    color: #ff6884;
    font-weight: bold;
    text-decoration: none;
    transition: all .3s;
    :hover {
      background-color: #fff;
    }
  }
  .logo {
    font-size: 30px;
  }
  .right {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`