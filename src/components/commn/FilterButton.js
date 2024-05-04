import styled from 'styled-components';

const FilterButton = styled.button`
  background: linear-gradient(145deg, #ddeef8, #9ea3a8);
  color: black;
  border: none;
  border-radius: 50px;
  padding: 10px 25px;
  font-size: 70%;
  cursor: pointer;
  margin: 10px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  font-weight: bold; // Make text stand out
  text-transform: uppercase; // Stylistic choice for filter buttons

  &:hover {
    background: linear-gradient(145deg, #007bdf, #004bac);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
  }

  &:active {
    background: linear-gradient(145deg, #0061bf, #003c8f);
    box-shadow: inset 2px 4px 6px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(38, 143, 255, 0.5);
  }
`;

export default FilterButton;
