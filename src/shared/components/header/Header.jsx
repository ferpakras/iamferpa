import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

import { useMainDispatch } from '../../store/MainContextStore';
import FerpaLogo from '../logo/FerpaLogo';

import * as S from './Header.styles';
const Header = () => {
  const dispatch = useMainDispatch();
  const router = useRouter();

  const changeTheme = (theme) => {
    dispatch({
      type: 'saveTheme',
      value: {
        name: theme,
      },
    });
  };

  return (
    <S.StyledHeader>
      <S.Box>
        <FerpaLogo />

        <S.ThemeMenu>
          <S.MenuList>
            <S.MenuListItem>
              <S.ButtonTheme onClick={() => changeTheme('lightTheme')}>
                <SunIcon />
              </S.ButtonTheme>
            </S.MenuListItem>
            <S.MenuListItem>
              <S.ButtonTheme>
                <MoonIcon onClick={() => changeTheme('darkTheme')} />
              </S.ButtonTheme>
            </S.MenuListItem>
          </S.MenuList>
        </S.ThemeMenu>
      </S.Box>

      <S.Nav>
        <S.List>
          <S.ListItem>
            <Link href="/">
              <S.StyledLink className={router.pathname === '/' ? 'active' : ''}>home.</S.StyledLink>
            </Link>
          </S.ListItem>
          <S.ListItem>
            <Link href="/artigos">
              <S.StyledLink className={router.pathname === '/artigos' ? 'active' : ''}>
                artigos.
              </S.StyledLink>
            </Link>
          </S.ListItem>
        </S.List>
      </S.Nav>
    </S.StyledHeader>
  );
};

export default Header;
