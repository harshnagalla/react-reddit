import "./Post.scss";
import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";

interface UpDownVoteProps {
  votes: string;
}
const UpDownVote = ({ votes }: UpDownVoteProps) => {
  return (
    <div className="upDownVote">
      <IoIosTrendingUp className="upDownVote__icon" />
      <label>{votes}</label>
      <IoIosTrendingDown className="upDownVote__icon" />
    </div>
  );
};

export default UpDownVote;
