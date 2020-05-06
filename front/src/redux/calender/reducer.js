import dayjs from "dayjs";
import { CALENDER_SET_MONTH } from "./actions";

const day = dayjs();

const init = {
  year: day.year(),
  month: day.month() + 1
};

const calenderReducer = (state = init, action) => {
  const {type, payload } = action;
  switch (type) {
    case CALENDER_SET_MONTH:
      return payload
    default:
      return state
  }
};

export default calenderReducer;