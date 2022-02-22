import { styled } from '../../../../stitches.config';
import { violet } from '@radix-ui/colors';

import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';

export const StyledToggleGroup = styled(ToggleGroupPrimitive.Root, {
  display: 'inline-flex',
  borderRadius: 4,
  boxShadow: `0 2px 10px ${'$gray7'}`,
});

export const StyledItem = styled(ToggleGroupPrimitive.Item, {
  all: 'unset',
  color: '$gray12',
  width: '$5',
  height: '$5',
  display: 'flex',
  fontSize: '$md',
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:first-child': {
    marginLeft: 0,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  '&:last-child': {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  '&:hover': {
    backgroundColor: '$gray3',
  },
  '&[data-state=on]': {
    backgroundColor: '$gray6',
    color: '$gray12',
  },
  '&:focus': {
    position: 'relative',
    boxShadow: `0 0 0 2px black`,
  },
});

// Exports
export const ToggleGroup = StyledToggleGroup;
export const ToggleGroupItem = StyledItem;

export const ButtonTheme = styled('button', {
  display: 'block',
  border: 'none',
  background: 'none',
  cursor: 'pointer',

  '& svg path': {
    fill: '$gray12',
  },
});
