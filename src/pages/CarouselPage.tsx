import Carousel from '../components/Carousel/Carousel';
import { CardType } from '../utils/data';

interface Props {
  cards: CardType[];
}
const CarouselPage = ({ cards }: Props) => {
  return (
    <div className="page">
      <Carousel items={cards} />
    </div>
  );
};

export default CarouselPage;
