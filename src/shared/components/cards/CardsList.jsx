import { styled } from '../../../../stitches.config';
import Card from './Card';

const List = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  listStyle: 'none',
});

const ListItem = styled('li', {
  marginX: '$1',
  marginY: '$1',
});

const Article = styled('article', {
  boxShadow: '0 0 0 0 $sage12',
});

const CardList = ({ cards = [] }) => {
  return (
    <List>
      {cards.map((item, i) => (
        <ListItem key={`card-item-${i}`}>
          <Card
            title={item.title}
            description={item.description}
            href={item.href}
            linkTitle={item.linkTitle}
            date={item.date}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default CardList;
