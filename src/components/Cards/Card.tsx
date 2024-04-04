export interface CardType {
  hasImage: boolean;
  imgSrc?: string;
  headerText?: string;
  bodyText: string;
}

interface CardProps {
  card: CardType;
  index: number;
}

const Card = ({ card, index }: CardProps) => {
  const { hasImage, imgSrc, headerText, bodyText } = card;

  return (
    <div className={`card ${index > 0 ? 'card-shadow' : ''}`}>
      {hasImage ? (
        <div className="card-header card-image">
          <img src={imgSrc} />
        </div>
      ) : (
        <div className="card-header">{headerText}</div>
      )}
      <div className="card-body">{bodyText}</div>
      <div className="card-footer">
        <button className="btn" type="button">
          Normal
        </button>
        <button className="btn btn-outline" type="button">
          Outline
        </button>
      </div>
    </div>
  );
};

export default Card;
