import { styled } from '../../../../stitches.config';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

export const StyledHeader = styled('header', {
  marginX: 'auto',
  marginBottom: '$6',
  paddingY: '$2',
});

export const StyledLink = styled('a', {
  all: 'unset',
  flex: '0 0 auto',
  padding: '0 5px',
  color: '$mauve1',
  display: 'inline-flex',
  width: '$5',
  height: '$5',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '$1',
  transition: 'all .3s',
  borderRadius: '$2',

  '& svg path': {
    color: '$mauve12',
  },

  '&:hover, &.active': {
    backgroundColor: '$violet12',
    color: '$violet1',
    cursor: 'pointer',

    '& svg path': {
      color: '$violet1',
    },
  },

  '&:focus': { position: 'relative', boxShadow: '0 0 0 2px black' },
});

export const Nav = styled('nav', {
  display: 'flex',
});

export const List = styled('ul', {
  listStyle: 'none',
  display: 'flex',
});

export const Box = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$4',
});
