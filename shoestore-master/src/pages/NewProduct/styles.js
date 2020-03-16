import styled from "styled-components";

import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  div {
    background: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 30px;
    align-items: left;

    strong {
      font-size: 21px;
      font-weight: bold;
      align: center;
    }

    span {
      font-weight: bold;
      line-height: 24px;
      color: #333;
      margin-top: 10px;
    }

    input {
      border: 1px solid #ddd;
      border-radius: 5px;
      height: 22px;
      color: #666;
    }

    textarea {
      border: 1px solid #ddd;
      border-radius: 5px;
      overflow: auto;
      height: 100px;
      resize: none;
      color: #666;
      width: 260px;
    }

    button {
      background: #7159c1;
      border-radius: 5px;
      font-weight: bold;
      margin-top: 20px;
      padding: 10px;
      color: #fff;
      border: 0;

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, "#7159c1")};
      }
    }
  }
`;
