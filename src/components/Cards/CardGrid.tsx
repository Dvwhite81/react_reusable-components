import Card from './Card';
import './Cards.css';

const CardGrid = () => {
  const cards = [
    {
      hasImage: false,
      headerText: 'First Card',
      bodyText: 'This is the first card',
    },
    {
      hasImage: false,
      headerText: 'Second Card',
      bodyText: 'This is the second card, similar to the first card',
    },
    {
      hasImage: true,
      imgSrc: 'https://fakeimg.pl/200x100/cccccc/909090?text=200+x+100',
      bodyText:
        'This is the third card. Similar to the first two cards, but with an image',
    },
    {
      hasImage: false,
      headerText: 'Fourth Card',
      bodyText: 'This is the fourth card, similar to the first two cards',
    },
  ];

  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <Card card={card} index={index} />
      ))}
    </div>
  );
};

export default CardGrid;
