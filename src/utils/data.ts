export interface CardType {
  hasImage: boolean;
  imgSrc?: string;
  headerText?: string;
  bodyText: string;
}

export const cards = [
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
