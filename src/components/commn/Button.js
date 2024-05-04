import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7vh;
`;

// Use your provided color palette
export const Button = styled.button`
  background: linear-gradient(
    145deg,
    #258b76,
    #6bfff7
  ); /* Aqua to Turquoise gradient */
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background: linear-gradient(
      145deg,
      #6bfff7,
      #258b76
    ); /* Reverse gradient on hover */
    transform: scale(1.05); /* Slight zoom effect on hover */
  }

  &:disabled {
    background-color: #74832a; /* Light green for disabled state */
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
