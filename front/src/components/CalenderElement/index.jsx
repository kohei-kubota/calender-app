import React from "react";
import { Typegraphy, Typography } from "@material-ui/core";
import dayjs from 'dayjs';

import * as styles from "./style.css";
import CalenderBoard from "../CalenderBoard/container";
import { isSameMonth, isFirstDay, isSameDay, getMonth } from "../../services/calendar";

const CalenderElement = ({ day, month }) => {
  const currentMonth = getMonth(month);
  const isCurrentMonth = isSameMonth(day, currentMonth);

  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

  const today = dayjs();

  const format = isFirstDay(day) ? "M月D日" : "D";

  const isToday = isSameDay(day, today);

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
    </div>
  );
};

export default CalenderElement