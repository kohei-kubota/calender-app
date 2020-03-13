import React from "react";
import { Typegraphy, Typography } from "@material-ui/core";

import * as styles from "./style.css";
import CalenderBoard from "../CalenderBoard";

const CalenderElement = ({ day }) => {
  const isFirstDay = day.date() === 1;
  const format = isFirstDay ? "M月D日" : "D";
  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        align="center"
        variant="caption"
        component="div"
      >
        {day.format(format)}
      </Typography>
    </div>
  );
};

export default CalenderElement