import styled from "styled-components";

export const SingerDetailsStyle = styled.div`
  .mv {
    width: 100vw;
    height: calc(100vh - 76px);
    object-fit: cover;
  }
  .singer-img {
    width: 100%;
    height: 500px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    background-image: url('${props => props.src}');
  }
`