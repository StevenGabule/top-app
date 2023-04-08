import styles from "./hhData.module.css";
import cn from "classnames";
import { HhDataProps } from "./hhData.props";
import { Card } from "../Card/Card";
import RateIcon from "./rate.svg";

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Total Vacancies</div>
        <div className={styles.countValue}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <div>
          <div className={styles.title}>Entry</div>
          <div className={styles.salaryValue}>{juniorSalary}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
        {/* entry */}
        <div>
          <div className={styles.title}>Intermediate</div>
          <div className={styles.salaryValue}>{middleSalary}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon />
          </div>
        </div>
        {/* intermediate */}
        <div>
          <div className={styles.title}>Professional</div>
          <div className={styles.salaryValue}>{seniorSalary}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
          </div>
        </div>
        {/* Professional */}
      </Card>
    </div>
  );
};
