import styled from "styled-components";

export const DiscContent = styled.div`
  width: 85%;
  min-width: 1000px;
  margin: 0 auto;
  .ant-carousel .slick-prev,
  .ant-carousel .slick-next,
  .ant-carousel .slick-prev:hover,
  .ant-carousel .slick-next:hover {
    font-size: inherit;
    color: currentColor;
  }
  .anticon {
    width: 30px;
    height: 30px;
    top: 40%;
    display: flex !important;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #fff !important;
    background-color: rgba(0, 0, 0, .5);
    transition: all .3s;
    :hover {
      transform: scale(1.5);
      background-color: #00badb;
    }
  }
  .slick-prev {
    left: -45px;
  }
  .slick-next {
    right: -45px;
  }
`
export const DiscSwiper = styled.div`
  width: 100%;
  height: 250px;
  display: grid !important;
  gap: 10px;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
`
export const DiscItem = styled.div`
  cursor: pointer;
  :hover  {
    img {
      transform: scale(1.2);
    }
    .sing-name, .singer-name {
      color: #00badb;
    }
  }
  .img {
    height: 200px;
    overflow: hidden;
    margin-bottom: 10px;
    img {
      width: 100%;
      height: 100%;
      transition: all .5s;
    }
  }
  .sing-name  {
    color: #222;
    transition: all .5s;
  }
  .singer-name {
    color: #666;
    font-style: italic;
    transition: all .5s;
  }
`

export const ArrowStyle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: red;
`