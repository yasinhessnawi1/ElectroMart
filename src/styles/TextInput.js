import styled from 'styled-components';

export const Title = styled.h2`
  color: #333;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  font-family: 'Arial', sans-serif;
`;
export const TextInput = styled.input`
  padding: 1rem;
  font-size: 1rem;
  width: calc(100% - 3rem);
  border: 2px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.2s;
  font-family: inherit;

  &:focus {
    border-color: #0056b3;
    outline: none;
  }
`;
const SelectWrapper = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
  color: #333;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const Option = styled.option``;

/**
 * SelectInput component for form selections
 * @param {Object} props - The props for the component.
 * @returns {React.Element} - The SelectInput component.
 */
// eslint-disable-next-line react/prop-types
export const SelectInput = ({ label, name, value, options, onChange }) => {
  return (
    <SelectWrapper>
      <Label htmlFor={name}>{label}</Label>
      <Select id={name} name={name} value={value} onChange={onChange}>
        <Option value=''>Select...</Option>
        {/* eslint-disable-next-line react/prop-types */}
        {options.map((option) => (
          <Option key={option.id} value={option.id}>
            {option.name}
          </Option>
        ))}
      </Select>
    </SelectWrapper>
  );
};
