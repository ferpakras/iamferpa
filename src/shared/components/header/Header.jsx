import FerpaLogo from '../logo/FerpaLogo';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  HomeIcon,
  Pencil2Icon,
  PersonIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from '@radix-ui/react-icons';

import * as S from './Header.styles';

import ChangeThemeButtons from '../change-theme/ChangeThemeButtons';
import { Separator } from '../separator/Separator';

const Header = () => {
  const router = useRouter();

  return (
    <S.StyledHeader>
      <S.Box>
        <FerpaLogo />
        <ChangeThemeButtons />
      </S.Box>

      <S.Nav>
        <S.List>
          <li>
            <Link href="/" title="Go to initial page">
              <S.StyledLink className={router.pathname === '/' ? 'active' : ''}>
                <HomeIcon />
              </S.StyledLink>
            </Link>
          </li>
          <li>
            <Link href="/artigos" title="Go to article page">
              <S.StyledLink className={router.pathname === '/artigos' ? 'active' : ''}>
                <Pencil2Icon />
              </S.StyledLink>
            </Link>
          </li>
        </S.List>

        <Separator orientation="vertical" css={{ marginX: '$2' }} />

        <S.List>
          <li>
            <Link href="/sou-eu" title="Go to initial page">
              <S.StyledLink className={router.pathname === '/sou-eu' ? 'active' : ''}>
                <PersonIcon />
              </S.StyledLink>
            </Link>
          </li>
          <li>
            <S.StyledLink
              href="https://www.linkedin.com/in/fernando-krasnievicz/"
              title="veja meu perfil no linkedin"
              target="_blank"
            >
              <LinkedInLogoIcon />
            </S.StyledLink>
          </li>
          <li>
            <Link
              href="https://instagram.com/iamferpah"
              title="veja meu perfil no instagram"
              target="_blank"
            >
              <S.StyledLink>
                <InstagramLogoIcon />
              </S.StyledLink>
            </Link>
          </li>
        </S.List>
      </S.Nav>

      {/* <ToolbarDemo /> */}
    </S.StyledHeader>
  );
};

export default Header;
