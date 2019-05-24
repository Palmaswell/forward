import styled from '@emotion/styled';
import { getFont } from './font';
import { Size } from './size';

export interface LinkBtnProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledLink = styled.button`
  display: block;
  border: none;
  padding: 0;
  margin-bottom: ${Size.M}px;
  color: white;
  letter-spacing: .5px;
  text-decoration: none;
  ${getFont()};
  font-size: 16px;
  transition: color .33s ease-in-out;
  background: none;
  cursor: pointer;
`;

export const LinkBtn: React.SFC<LinkBtnProps> = (props): JSX.Element => {
  return (
    <StyledLink onClick={props.onClick}>
      {props.children}
    </StyledLink>
  )
}
