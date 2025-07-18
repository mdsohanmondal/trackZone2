import styled from 'styled-components';

const ButtonWrapper = styled.button`
  padding: 0.3rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  color: ${(prop) => (prop.dark ? '#fff' : '#000')};
  background-color: ${(prop) => (prop.dark ? '#000' : '#fff')};
  border-radius: 0.3rem;
  cursor: pointer;
  border: 1px solid #ddd;
  margin: 0.2rem;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: ${(prop) => (prop.dark ? '#111' : '#f2f2f2')};
    color: ${(prop) => (prop.dark ? '#fff' : '#000')};
    border: ${(prop) => (prop.dark ? '1px solid #444' : '1px solid #d2d2d2')};
  }
`;

const Button = ({ children, dark, type = 'button', onClick = null }) => {
  return (
    <ButtonWrapper onClick={onClick} type={type} dark={dark}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
