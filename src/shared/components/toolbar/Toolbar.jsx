import React from 'react';
import { styled } from '@stitches/react';
import { HomeIcon, LineHeightIcon, Pencil2Icon } from '@radix-ui/react-icons';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import { useRouter } from 'next/router';
import ChangeThemeButtons from '../change-theme/ChangeThemeButtons';
import FerpaLogo from '../logo/FerpaLogo';
import Link from 'next/link';

const StyledToolbar = styled(ToolbarPrimitive.Root, {
  display: 'flex',
  width: '100%',
  minWidth: 'max-content',
});

const StyledLink = styled('a', {
  // ...itemStyles,
  color: '$mauve1',
  display: 'inline-flex',
  width: '$5',
  height: '$5',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '$1',

  '@bp1': {
    marginRight: '$4',
  },

  '&.active': {
    backgroundColor: '$violet12',

    '& svg path': {
      color: '$mauve1',
    },
  },
});

const StyledSeparator = styled(ToolbarPrimitive.Separator, {
  display: 'block',
  width: 1,
  marginRight: '$1',
  backgroundColor: '$gray8',
});

// Exports
export const Toolbar = StyledToolbar;
export const ToolbarSeparator = StyledSeparator;

const ToolbarDemo = () => {
  const router = useRouter();

  return (
    <Toolbar aria-label="Main navigation menu">
      <Link href="/" title="Go to initial page">
        <StyledLink className={router.pathname === '/' ? 'active' : ''}>
          <HomeIcon />
        </StyledLink>
      </Link>

      <Link href="/artigos" title="Go to article page">
        <StyledLink className={router.pathname === '/artigos' ? 'active' : ''}>
          <Pencil2Icon />
        </StyledLink>
      </Link>
      <ToolbarSeparator />

      <ChangeThemeButtons />
    </Toolbar>
  );
};

export default ToolbarDemo;
