import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalender } from "../../services/calendar";

const mapStateToProps = state => ({ calender: state.calender });

const mergeProps = stateProps => ({
  month: stateProps.calender,
  calender: createCalender(stateProps.calender)
})

export default connect(mapStateToProps, null, mergeProps)(CalendarBoard)
