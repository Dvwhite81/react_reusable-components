import CardGrid from '../components/Cards/CardGrid';
import { CardType } from '../utils/data';

interface Props {
  cards: CardType[];
}

const CardGridPage = ({ cards }: Props) => {
  return (
    <div className="page">
      <CardGrid cards={cards} />
    </div>
  );
};

export default CardGridPage;
