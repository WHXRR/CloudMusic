import styled from "styled-components";

export const SingerDetailsStyle = styled.div`
  .singer-img {
    width: 100%;
    height: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-image: url('${props => props.src}');
  }
  .ant-tabs-nav-wrap {
    background: #f5f5f5;
  }
  .ant-tabs-content-holder {
    padding: 0 20px;
    background: #f5f5f5;
  }
  .card-container {
    padding: 20px 0;
    background: #f5f5f5;
  }
  .card-container p {
    margin: 0;
  }
  .card-container > .ant-tabs-card .ant-tabs-content {
    margin-top: -16px;
  }
  .card-container > .ant-tabs-card .ant-tabs-content > .ant-tabs-tabpane {
    padding: 16px;
    background: #fff;
  }
  .card-container > .ant-tabs-card > .ant-tabs-nav::before {
    display: none;
  }
  .card-container > .ant-tabs-card .ant-tabs-tab,
  [data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-tab {
    background: transparent;
    border-color: transparent;
  }
  .card-container > .ant-tabs-card .ant-tabs-tab-active,
  [data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-tab-active {
    background: #fff;
    border-color: #fff;
  }
  #components-tabs-demo-card-top .code-box-demo {
    padding: 24px;
    overflow: hidden;
    background: #f5f5f5;
  }
  [data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-content {
    margin-top: -8px;
  }
  [data-theme='dark'] .card-container > .ant-tabs-card .ant-tabs-tab {
    background: transparent;
    border-color: transparent;
  }
  [data-theme='dark'] #components-tabs-demo-card-top .code-box-demo {
    background: #000;
  }
  [data-theme='dark'] .card-container > .ant-tabs-card .ant-tabs-content > .ant-tabs-tabpane {
    background: #141414;
  }
  [data-theme='dark'] .card-container > .ant-tabs-card .ant-tabs-tab-active {
    background: #141414;
    border-color: #141414;
  }
  .simi {
    padding: 0 20px;
  }
  .ant-list-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 0;
  }
`