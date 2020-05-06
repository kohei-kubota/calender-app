import { connect } from "react-redux";

import Navigation from './presentation';
import { getNextMonth, getPreviousMonth} from "../../services/calendar"
import { calenderSetMonth } from "../../redux/calender/actions";

const mapStateToProps = state => ({ calender: state.calender});

const mapDispatchToProps = dispatch => ({
  setMonth: month => {
    console.log(dispatch)
    dispatch(calenderSetMonth(month))
  }
});

const mergeProps = (stateProps, dispatchProps) => ({
  setNextMonth: () => {
    console.log(dispatchProps)
    const nextMonth = getNextMonth(stateProps.calender);
    dispatchProps.setMonth(nextMonth)
  },
  setPreviousMonth: () => {
    const previousMonth = getPreviousMonth(stateProps.calender)
    dispatchProps.setMonth(previousMonth)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Navigation);
