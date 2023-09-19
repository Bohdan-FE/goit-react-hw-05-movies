import styled from 'styled-components';

export const FormStyled = styled.form`
  border-radius: 5px;
  display: inline-block;
  font-size: 0px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  z-index: 1;
  input {
    background: linear-gradient(#333, #222);
    border: 1px solid #444;
    border-radius: 5px 0 0 5px;
    box-shadow: 0 2px 0 #000;
    color: #888;
    display: block;
    float: left;
    font-family: 'Cabin', helvetica, arial, sans-serif;
    font-size: 13px;
    font-weight: 400;
    height: 40px;
    margin: 0;
    padding: 0 10px;
    text-shadow: 0 -1px 0 #000;
    width: 200px;
    &:focus {
      animation: glow 800ms ease-out infinite alternate;
      background: #222922;
      background: linear-gradient(#333933, #222922);
      border-color: #393;
      box-shadow: 0 0 5px rgba(0, 255, 0, 0.2),
        inset 0 0 5px rgba(0, 255, 0, 0.1), 0 2px 0 #000;
      color: #efe;
      outline: none;
    }
  }
  button {
    background: #222;
    background: linear-gradient(#333, #222);
    box-sizing: border-box;
    border: 1px solid #444;
    border-left-color: #000;
    border-radius: 0 5px 5px 0;
    box-shadow: 0 2px 0 #000;
    color: #fff;
    display: block;
    float: left;
    font-family: 'Cabin', helvetica, arial, sans-serif;
    font-size: 13px;
    font-weight: 400;
    height: 40px;
    line-height: 40px;
    margin: 0;
    padding: 0;
    position: relative;
    text-shadow: 0 -1px 0 #000;
    width: 80px;
    &:hover,
    &:focus {
      background: #292929;
      background: linear-gradient(#393939, #292929);
      color: #5f5;
      outline: none;
    }
  }
`;
