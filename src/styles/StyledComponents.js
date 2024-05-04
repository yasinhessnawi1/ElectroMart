import styled from 'styled-components';

export const PageContainers = styled.div`
  padding: 20px;
  background: linear-gradient(
    to right,
    #000000 55%,
    #324a21 100%
  ); // More coverage by black
  min-height: 100vh;
  color: #ffffff; // Ensuring all text inside is light for readability on dark background
`;

export const TextInfo = styled.p`
  font-size: 16px;
  color: #f8f7f7; // Changed to white for visibility on potentially dark backgrounds
  margin: 10px 0;
  line-height: 1.4;

  &:hover {
    color: #ccc; // Light grey on hover for a softer effect
  }
`;

export const Card = styled.div`
  background: linear-gradient(
    to right,
    #324a21,
    #000000
  ); // Keeping cards light for contrast with dark page background
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const Button = styled.button`
  background-color: #007bff; // Blue for a pop of color on buttons
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3; // Darker blue when hovered
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(
    to right,
    #000000 55%,
    #324a21 100%
  ); // Light background for the modal for focus
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 15px 25px rgba(188, 187, 187, 0.2);
  z-index: 10;
  width: 500px;
  display: flex;
  flex-direction: column;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #000000 55%, #324a21 100%);
  z-index: 5;
`;
