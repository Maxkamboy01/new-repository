import styled from "styled-components";

export const Wrapperstyle = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: url("data:image/jpeg;base64,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");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  font-family: "Comic Neue", "cursive", sans-serif;
  background: rgb(0, 158, 226);
  background: linear-gradient(
    58deg,
    rgba(0, 158, 226, 1) 1%,
    rgba(0, 158, 239, 1) 46%,
    rgba(1, 34, 156, 1) 100%
  );

  &::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 105px;
    width: 200px;
    height: 200px;
    background-color: #ffbf2b;
    box-shadow: 0 0 20px #ffbf2b, 0 0 80px #ffbf2b, 0 0 180px #ffbf2b;
    border-radius: 50%;
  }
  &::after {
    content: "";
    position: absolute;
    top: 200px;
    right: 482px;
    width: 120px;
    height: 120px;
    background-color: #eee;
    border-radius: 40% 4px 4px 80%;
  }

  h2 {
    text-align: center;
    font-size: 30px;
    margin: 5px;
    p {
      margin: 5px;
      margin-bottom: 15px;
      font-size: 22px;
      color: #444;
    }
  }
`;

export const Boxstyle = styled.div`
  width: fit-content;
  min-width: 1400px;
  height: fit-content;
  background-color: #333;
  padding: 20px 30px 35px 20px;
  margin: auto auto auto 80px;
  margin: auto;
  border: 2px solid #ccc;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255, 0.7);
  backdrop-filter: blur(9px);
  border-radius: 15px;
  z-index: 999;
  input {
    width: 60%;
    height: 40px;
    margin: 15px auto;
    border: 2px solid lightgrey;
    background-color: #eee;
    border-radius: 5px;
    font-size: 17px;
    text-indent: 10px;
    transition-duration: 0.4s;
    text-transform: capitalize;
    &:hover {
      background-color: #fff;
      color: #111;
    }
  }
`;

export const FlexBox = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ImgBox = styled.div`
  width: 32%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  img {
    width: 340px;
    margin: -100px 0;
    margin-bottom: -100px;
  }
  h3 {
    font-size: 35px;
    font-weight: bold;
    text-align: left;
    letter-spacing: 4px;
    margin-top: 80px;
    margin-bottom: 0;
    .h2 {
      font-size: 24px;
      font-weight: bold;
      letter-spacing: 6px;
      color: #444;
      margin: 5px;
      margin-right: 10px;
      text-align: right;
    }
  }
`;

export const DisplayFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 68%;
`;

export const TextsBox = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  font-family: "Bebas Neue", "cursive", sans-serif;
`;

export const MapBox = styled.div`
  width: 40%;
  margin-left: auto;
`;

export const TempText = styled.h2`
  font-size: 30px;
  text-align: center;
  color: #777;
  font-family: "Underdog", cursive;

  span {
    color: #ffbf2b;
  }
`;

export const FeelsLike = styled.div`
  width: 100%;
  height: fit-content;
  padding: 8px 4px;
  border: 1px solid #aaa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Underdog", cursive;
  margin-bottom: 13px;
  div {
    display: flex;
    align-items: center;
    img {
      width: 28px !important;
      margin-right: 7px;
    }
    span {
      font-size: 13px;
      font-weight: 600;
      text-transform: capitalize;
      color: #333;
    }
  }
`;

export const FeelsLikeSmall = styled.div`
  width: 49%;
  height: fit-content;
  padding: 8px 4px;
  border: 1px solid #aaa;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Mapstyle = styled.div`
  padding: 0;
  .mapouter {
    position: relative;
    text-align: right;
    width: 100%;
    height: 200px;
  }
  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    width: 100%;
    height: 200px;
    border: 1px solid #aaa;
    padding: 2px;
  }
  .gmap_iframe {
    height: 200px !important;
  }
`;
