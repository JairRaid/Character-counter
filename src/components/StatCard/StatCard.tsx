import "./StatCard.css";

interface StatCardProps extends React.LiHTMLAttributes<HTMLLIElement> {
  label: string;
  value: number;
}

const StatCard = ({ className, label, value }: StatCardProps) => {
  return (
    <li className={`stat-card ${className}`}>
      <p className="stat-card__value">
        <data value={value}>{String(value).padStart(2, "0")}</data>
      </p>
      <p className="stat-card__label">{label}</p>
    </li>
  );
};

export default StatCard;
