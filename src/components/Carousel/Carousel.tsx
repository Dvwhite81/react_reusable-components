import { useState } from 'react';

import { getMidIndex, getRequestedIndex } from '../../utils/helpers';
import { CardType } from '../../utils/data';
import Card from '../Cards/Card';

interface CarouselProps {
  items: CardType[];
}

const Carousel = ({ items }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(getMidIndex(items));
  const [leftIndex, setLeftIndex] = useState<number>(
    getRequestedIndex(activeIndex, items, 'left')
  );
  const [rightIndex, setRightIndex] = useState<number>(
    getRequestedIndex(activeIndex, items, 'right')
  );

  const getClassName = (index: number) => {
    switch (index) {
      case activeIndex: {
        return 'active';
      }
      case leftIndex: {
        return 'left';
      }
      case rightIndex: {
        return 'right';
      }
      default: {
        return 'hidden';
      }
    }
  };

  const scrollRight = () => {
    const newLeft = activeIndex;
    const newActive = rightIndex;
    const newRight = getRequestedIndex(newActive, items, 'right');
    setLeftIndex(newLeft);
    setActiveIndex(newActive);
    setRightIndex(newRight);
  };

  const scrollLeft = () => {
    const newRight = activeIndex;
    const newActive = leftIndex;
    const newLeft = getRequestedIndex(newActive, items, 'left');
    setLeftIndex(newLeft);
    setActiveIndex(newActive);
    setRightIndex(newRight);
  };

  return (
    <div className="carousel-outer">
      <div className="carousel-inner">
        {items.map((card, index) => (
          <div key={index} className={`carousel-item ${getClassName(index)}`}>
            <Card card={card} index={index} />
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button
          type="button"
          className="btn carousel-control-btn"
          onClick={scrollLeft}
        >
          {'<'}
        </button>
        <button
          type="button"
          className="btn carousel-control-btn"
          onClick={scrollRight}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
