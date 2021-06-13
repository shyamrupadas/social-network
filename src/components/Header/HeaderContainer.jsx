import Header from "./Header";
import React from 'react';
import {connect} from "react-redux";
import {checkAuthorised, setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.checkAuthorised();
  }

  render() {
    return <Header {...this.props}/>
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {setAuthUserData, checkAuthorised})(HeaderContainer);