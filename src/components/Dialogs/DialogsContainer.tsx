import { actions } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { AppStateType } from '../../redux/redux-store';

const mapStateToProps = (state: AppStateType) => {
  return {
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs
  }
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, {sendMessage: actions.sendMessage}),
  withAuthRedirect
)(Dialogs);