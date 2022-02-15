import { styled } from '../../../../stitches.config';

const Logo = styled('div', {
  fontFamily: '$logo',
  fontSize: '$md',
});

const FerpaLogo = () => <Logo>i am &#123;f&#125;erpa.</Logo>;

export default FerpaLogo;
