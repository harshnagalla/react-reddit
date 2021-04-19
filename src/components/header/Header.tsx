import "./Header.scss";
import redditLogo from "../../assets/images/redditLogo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={redditLogo} alt="" />
    </div>
  );
};

export default Header;
