import styled, { keyframes } from "styled-components";

const dim = keyframes`
    0%, 100%{
        opacity: 0.2;
    }
    50%{
        opacity: 0.5;
    }
`;

export const Container = styled.div`
  width: 300px;
  height: 380px;
  min-width: 300px;
  min-height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
  width: 220px;
  height: 320px;
  background: var(--text-gray50-color);
  border-radius: 10px;
  animation: ${dim} 2s linear 0.2s infinite;
`;

export const Footer = styled.div`
  width: 220px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Name = styled.div`
  width: 120px;
  height: 20px;
  background: var(--text-gray50-color);
  border-radius: 10px;
  animation: ${dim} 2s linear 0.3s infinite;
`;

export const Price = styled.div`
  width: 40px;
  height: 20px;
  background: var(--text-gray50-color);
  border-radius: 10px;
  animation: ${dim} 2s linear 0.5s infinite;
`;
