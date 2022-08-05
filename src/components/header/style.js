import styled from 'styled-components'

export const HeaderStyle = styled.div`
 padding-bottom: 62px;
  .shadow {
    background-color: #272727;
    a {
      color: #fff !important;
    }
  }
`

export const HearderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: #252525;
  padding: 0px 30px;
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  transition: all .5s;
  a {
    padding: 20px 10px;
    color: #fff;
    font-family: Poppins;
    text-decoration: none;
    transition: all .5s;
  }
  .logo {
    cursor: pointer;
    font-size: 30px;
    justify-self: flex-start;
  }
  .center {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-self: center;
  }
  .search-ipt {
    border-top: none;
    border-left: none;
    border-right: none;
    background-color: transparent;
    .ant-input {
      color: #fff;
      background-color: transparent;
    }
    .search-icon {
      cursor: pointer;
      color: #fff;
    }
  }
`