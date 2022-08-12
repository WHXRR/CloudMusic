import styled from 'styled-components'

export const HeaderStyle = styled.div`
 padding-bottom: 62px;
  .pointer {
   cursor: pointer;
  }
  .white {
    color: #fff !important;
  }
  .shadow {
    background-color: #272727;
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
  @media screen and (max-width: 1000px) {
    grid-template-columns: 200px 1fr 200px;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 50px 1fr;
    .center {
      display: none !important;
    }
    .search-ipt {
      display: none !important;
    }
    .search-icon-xs {
      display: block !important;
    }
  }
  .white {
    padding: 20px 10px;
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
    margin: 15px 0;
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
  .search-icon-xs {
    display: none;
    margin: 19px 0;
    color: #fff;
    font-size: 25px;
    text-align: right;
  }
`