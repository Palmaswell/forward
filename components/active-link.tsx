import styled from '@emotion/styled';
import { getFont } from './font';
import { withRouter } from 'next/router';
import { Size } from './size';

export interface ActiveLinkProps {
  href?: string;
  router?: any;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const StyledLink = styled.a`
  display: block;
  margin-bottom: ${Size.M}px;
  color: white;
  letter-spacing: .5px;
  text-decoration: none;
  ${getFont()};
  transition: color .33s ease-in-out;
`;

const ActiveLink: React.SFC<ActiveLinkProps> = (props): JSX.Element => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    props.router.push(props.href);
  }

  return (
    <StyledLink href={props.href} onClick={handleClick}>
      {props.children}
    </StyledLink>
  )
}
export const Link = withRouter(ActiveLink);
