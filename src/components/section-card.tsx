import "./cards-styling.css";

// a type to specify the type of card
// the card will be different based on type
type CardType = 1 | 2;

interface CardProps {
  type: CardType;
  title: string;
  content: string;
  imageUrl: string;
}

export default function SectionCard({
  type,
  title,
  content,
  imageUrl,
}: CardProps) {
  if (type === 1) {
    return (
      <>
        <div className="type-1-card section-card">
          <img src={imageUrl} alt="" />
          <h2 className="desc-title">{title}</h2>
          <p className="content">{content}</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="type-2-card section-card">
          <img src={imageUrl} alt="" />
          <h2 className="desc-title">{title}</h2>
          <p className="content">{content}</p>
        </div>
      </>
    );
  }
}
