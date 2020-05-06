import { connect } from "react-redux";

import Navigation from './presentation';
import { getNextMonth, getPreviousMonth, getMonth, formatMonth} from "../../services/calendar"
import { calenderSetMonth } from "../../redux/calender/actions";

const mapStateToProps = state => ({ calender: state.calender});

const mapDispatchToProps = dispatch => ({
  setMonth: month => {
    console.log(dispatch)
    dispatch(calenderSetMonth(month))
  }
});

const mergeProps = (stateProps, dispatchProps) => ({
  month: getMonth(stateProps.calender),

  setNextMonth: () => {
    const nextMonth = getNextMonth(stateProps.calender);
    dispatchProps.setMonth(nextMonth)
  },
  setPreviousMonth: () => {
    const previousMonth = getPreviousMonth(stateProps.calender)
    dispatchProps.setMonth(previousMonth)
  },
  setMonth: dayObj => {
    const month = formatMonth(dayObj);
    dispatchProps.setMonth(month);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Navigation);
