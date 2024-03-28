import * as React from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { Row, Col } from "antd";
import { Title, Subtitle, RightDiv, LeftDiv, CenteredDiv } from "./style";
import { MailOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "@store/index";
import { User } from "../../../store/ducks/auth/types";
import * as AuthActions from "../../../store/ducks/auth/actions";

interface StateProps {
  User: User;
  isAuthenticated: boolean;
}

interface DispatchProps {
  signInRequest(email: string, password: string): void;
  signOutRequest(): void;
}

type Props = StateProps & DispatchProps;

const LoginForm = (props: Props) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const forgetPassword = () => {
    alert("Forget password");
  };

  const handleLogin = async () => {
    const { signInRequest } = props;
    try {
      signInRequest(email, password);
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <>
      <LeftDiv>
        <CenteredDiv>
          <Row gutter={[12, 12]}>
            <Col span={24}>
              <Title>Welcome!</Title>
              <Subtitle>Please, login your account!</Subtitle>
            </Col>
            <Input
              label="E-mail"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Type your e-mail"
              value={email}
              maxLength={100}
              icon={<MailOutlined />}
              colSize={24}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type your senha"
              value={password}
              maxLength={50}
              icon={<LockOutlined />}
              passwordField
              colSize={24}
            />
            <Col span={24}>
              <label onClick={forgetPassword}>Forgot your password?</label>
            </Col>
            <Button
              label="Login"
              onClick={handleLogin}
              type="primary"
              colSize={24}
              icon={<LoginOutlined />}
            />
          </Row>
        </CenteredDiv>
      </LeftDiv>
      <RightDiv>
        <h1>Your image or text here!</h1>
      </RightDiv>
    </>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  User: state.auth.loggedUser,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
