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
     font-size: 12px;
     line-height: 20px;
     color: #333;
     margin-top: 10px;
    }

    input {
      border: 1px solid #ddd;
      border-radius: 5px;
      color: #666;
      height: 22px;
    }

    button {
      margin-top: 25px;
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 5px;
      padding: 8px;
      font-weight: bold;

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, "#7159c1")};
      }
    }
   
  }
}
`;
