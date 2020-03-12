import React from "react";

import * as styles from "./style.css";
import CalenderBoard from "../CalenderBoard";

const CalenderElement = ({ children }) => {
  return (
    <div className={styles.element}>
      <div className={styles.date}>{children}</div>
    </div>
  );
};

export default CalenderElement