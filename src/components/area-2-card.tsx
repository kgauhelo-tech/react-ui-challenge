// a type to specify the type of card
// the card will be different based on type
type CardType = 1 | 2;

interface CardProps {
  type: CardType;
  title: string;
  content: string;
  imageUrl: string;
}

export default function Section2Card({
  type,
  title,
  content,
  imageUrl,
}: CardProps) {
  if (type === 1) {
    return <></>;
  } else {
    return <></>;
  }
}
