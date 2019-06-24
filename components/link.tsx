import styled from "@emotion/styled";
import { getFont } from "./font";
import { Size } from "./size";

export interface LinkBtnProps {
  color: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface StyledLinkProps {
  size: number;
  color: string;
}

interface StyledIconProps {
  size: number;
  color: string;
}

const StyledLink = styled.button`
  display: flex;
  border: none;
  padding: 0;
  margin-bottom: ${Size.M}px;
  color: ${(props: StyledLinkProps) => props.color};
  letter-spacing: 0.5px;
  text-decoration: none;
  ${getFont()};
  font-size: ${(props: StyledLinkProps) =>  props.size}px;
  transition: color 0.33s ease-in-out;
  background: none;
  cursor: pointer;
`;

const LinkIcon = styled.svg`
  align-self: center;
  width: ${(props: StyledIconProps) =>  props.size}px;
  height: ${(props: StyledIconProps) =>  props.size}px;
  margin-left: ${Size.XXS}px;
  fill: currentColor;
  color: ${(props: StyledIconProps) => props.color};
`;

export const LinkBtn: React.SFC<LinkBtnProps> = (props): JSX.Element => {
  const size = 14;
  const {color, onClick} = props;
  return (
    <StyledLink color={color} size={size} onClick={onClick}>
      {props.children}
      <LinkIcon color={color} size={size} viewBox="0 0 129 129">
        <path d="M40.4 121.3c-.8.8-1.8 1.2-2.9 1.2s-2.1-.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8 0l53.9 53.9c1.6 1.6 1.6 4.2 0 5.8l-53.9 53.9z" />
      </LinkIcon>
    </StyledLink>
  );
};
