import Link from 'next/link';
import { styled } from '../../../../stitches.config';
import { Text } from '../text/Text';

const StyledA = styled('a', {
  display: 'block',
  textDecoration: 'none',

  '&:hover': {
    cursor: 'pointer',
  },
});

const Article = styled('article', {
  padding: '$2',
  borderRadius: '$2',
  border: '1px solid $mauve4',
  transition: 'all .3s',

  '&:hover': {
    backgroundColor: '$mauve4',
  },

  '@bp1': {
    width: 200,
  },
});

const Card = ({ href, linkTitle, title, description, date }) => {
  return (
    <Link href={href} title={linkTitle}>
      <StyledA>
        <Article>
          <Text as="h3">{title}</Text>
          <Text>{description}</Text>
          <Text
            as="small"
            css={{ display: 'block', marginBottom: 0, fontSize: '$sm', textAlign: 'right' }}
          >
            {date}
          </Text>
        </Article>
      </StyledA>
    </Link>
  );
};

export default Card;
