import classes from "./DealCard.module.scss";
import { PiFileArrowDownFill } from "react-icons/pi";
import { TbFileXFilled } from "react-icons/tb";
import { CiCalendar } from "react-icons/ci";
interface DealCardProps {
  heading?: string;
  icon?: "UA" | "closed" | "HT";
  totalDeals?: number;
  outOfTotalHeading?: string;
  outOfTotal?: number;
  outOfTotalPercent?: number;
  growth?: string;
  growthValue?: number;
}

const DealCard: React.FC<DealCardProps> = ({
  heading = "Total Deals Closed",
  icon = "closed",
  totalDeals = 256,
  outOfTotalHeading = "Deals Closed",
  outOfTotal = 156,
  outOfTotalPercent,
  growth = "positive",
  growthValue = 35.6,
}) => {
  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
        <h1>{heading} </h1>
        <span>{renderIcon(icon)}</span>
      </div>

      <div className={classes.cardContent}>
        <div>
          <h2>Total Deals</h2>
          <p>{totalDeals}</p>
        </div>
        <div>
          <h2>{outOfTotalHeading}</h2>
          <p>
            {outOfTotal}
            {outOfTotalPercent && <span> ({outOfTotalPercent}%)</span>}
          </p>{" "}
        </div>
        <p
          className={`
            ${classes.growth}
            ${growth === "negative" ? classes.negative : classes.positive}
          `}
        >
          {growth === "positive" ? "+" : "-"}
          {growthValue}%
        </p>
      </div>
    </div>
  );
};

export default DealCard;

const renderIcon = (status: "UA" | "closed" | "HT") => {
  switch (status) {
    case "UA":
      return <PiFileArrowDownFill />;
    case "closed":
      return <TbFileXFilled />;
    case "HT":
      return <CiCalendar />;
    default:
      return null;
  }
};
