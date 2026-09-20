import "./cards-styling.css";

interface Props {
  path: string;
  title: string;
  body: string;
  imgAlt?: string;
}

export default function AboutGrid({ path, body, title, imgAlt }: Props) {
  return (
    <div className="grid-component">
      <div className="row-1">
        <img src={path} alt={imgAlt} />
        <h3>{title}</h3>
      </div>
      <p className="row-2">{body}</p>
    </div>
  );
}
