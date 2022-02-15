import { styled } from '../../../../stitches.config';

export const StyledHeader = styled('header', {
  marginX: 'auto',
  marginBottom: '$6',
  paddingY: '$2',
  fontFamily: '$logo',
  fontSize: '$md',
});

export const Nav = styled('nav', {});

export const List = styled('ul', {
  display: 'flex',
  listStyle: 'none',
});

export const ListItem = styled('li', {
  marginRight: '$2',
});

export const StyledLink = styled('a', {
  display: 'block',
  paddingY: '$2',
  paddingX: '$2',
  borderBottom: '1px solid $line',
  cursor: 'pointer',
  transition: 'all .3s',

  '&:hover': {
    backgroundColor: '$sage5',
  },

  '&.active': {
    backgroundColor: '$sage6',
  },
});

export const Box = styled('div', {
  display: 'flex;',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const ThemeMenu = styled('menu', {
  paddingY: '$2',
});

export const MenuList = styled('ul', {
  display: 'flex',
  listStyle: 'none',
});

export const MenuListItem = styled('li', {
  marginLeft: '$1',
});

export const ButtonTheme = styled('button', {
  display: 'block',
  width: '$4',
  height: '$4',
  border: 'none',
  background: 'none',
  cursor: 'pointer',

  '& svg path': {
    fill: '$gray12',
  },
});
