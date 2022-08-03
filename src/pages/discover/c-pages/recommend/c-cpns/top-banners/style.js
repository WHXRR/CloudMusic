import styled from "styled-components";
import bg from '@/assets/img/bg.jpg'

export const BannerStyle = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 62px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  ::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background-color: rgba(0, 0, 0, .8);
  }
  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
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
    top: 50%;
    z-index: 9;
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
    left: 110px;
  }
  .slick-next {
    right: 110px;
  }
`