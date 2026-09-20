import "./cards-styling.css";

interface CardProps {
  icon: string;
  description: string;
  quantity: string;
}

export default function FooterCard({ icon, description, quantity }: CardProps) {
  return (
    <div className="footer-card">
      <img src={icon} alt="" />
      <p className="bold desc">{description}</p>
      <p className="special bold quantity">{quantity}</p>
    </div>
  );
}
