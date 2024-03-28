import { Dropdown, Space } from "antd";
import { UserOutlined, PoweroffOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "@store/index";
import * as AuthActions from "../../../store/ducks/auth/actions";
import { useNavigate } from "react-router-dom";
import "./style.css";

interface DispatchProps {
  signOutRequest(): void;
}

const HeaderDropdown = (props: DispatchProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("teste");
    const { signOutRequest } = props;
    signOutRequest();
    navigate("/");
  };

  const items = [
    {
      key: "1",
      label: "Logout",
      icon: <PoweroffOutlined />,
      onClick: handleLogout,
    },
  ];
  return (
    <Dropdown trigger={["click"]} menu={{ items }} autoAdjustOverflow={true}>
      <Space className="trigger" style={{ float: "right" }}>
        <UserOutlined
          style={{
            color: "#fff",
          }}
        />
      </Space>
    </Dropdown>
  );
};
const mapStateToProps = (state: ApplicationState) => ({
  User: state.auth.loggedUser,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDropdown);
