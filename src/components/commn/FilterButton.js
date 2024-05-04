import styled from 'styled-components';

const FilterButton = styled.button`
  background: linear-gradient(
    145deg,
    #258b76,
    #6bfff7
  ); // Aqua to Turquoise gradient
  color: #ffffff; // White color for text
  border: none;
  border-radius: 50px;
  padding: 10px 25px;
  font-size: 70%;
  cursor: pointer;
  margin: 10px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    background: linear-gradient(
      145deg,
      #fafb63,
      #324a21
    ); // Yellow to Green gradient for hover
    box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
  }

  &:active {
    background: linear-gradient(
      145deg,
      #324a21,
      #74832a
    ); // Green to Light green gradient for active state
    box-shadow: inset 2px 4px 6px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 171, 99, 0.5); // A soft glow in a light color from your palette
  }
`;

export default FilterButton;
