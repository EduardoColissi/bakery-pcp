import { ApplicationState } from "../store/index";
import * as React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

interface OwnProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

const PrivatePage = (props: OwnProps) => {
  if (!props.isAuthenticated) {
    return <Navigate to="/" />;
  }

  return props.children;
};

const mapStateToProps = (state: ApplicationState) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivatePage);
