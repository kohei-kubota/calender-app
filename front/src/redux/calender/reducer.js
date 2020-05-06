import dayjs from "dayjs";
import { CALENDER_SET_MONTH } from "./actions";
import { formatMonth } from "../../services/calendar"

const day = dayjs();

const init = formatMonth(day)

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