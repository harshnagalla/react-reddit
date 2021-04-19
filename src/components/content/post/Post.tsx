import test from "../../../assets/images/testImage.png";
import "./Post.scss";
import UpDownVote from "./UpDownVote";
import {
  FiMessageSquare,
  FiShare2,
  FiBookmark,
  FiEyeOff,
  FiFlag
} from "react-icons/fi";

interface LinkFlare {
  flareText: string;
  flareTextColor: string;
  flareBackground: string;
}

interface AuthorFlare {
  authorFlareText: string;
  authorFlareTextColor: string;
  authorFlareBackground: string;
}

interface PostProps {
  title: string;
  createdBy: string;
  noOfComments: string;
  votes: string;
  authorFlare: AuthorFlare;
  linkFlare: LinkFlare;
  createdAt: string;
}

const Post = ({
  title,
  createdBy,
  noOfComments,
  votes,
  authorFlare,
  linkFlare,
  createdAt
}: PostProps) => {
  const { flareText, flareTextColor, flareBackground } = linkFlare;

  const {
    authorFlareText,
    authorFlareTextColor,
    authorFlareBackground
  } = authorFlare;
  const linkFlareStyle = {
    backgroundColor: flareBackground,
    color: flareTextColor
  };

  const authorFlareStyle = {
    backgroundColor: authorFlareBackground,
    color: authorFlareTextColor
  };
  return (
    <div className="post">
      <UpDownVote votes={votes} />
      <img src={test} alt="" />
      <div className="post__titleContainer">
        <p className="post__title">
          {title}{" "}
          <span style={linkFlareStyle} className="post__linkFlare">
            {flareText}
          </span>
        </p>
        <label className="post__createdBy">
          {createdBy}{" "}
          <span style={authorFlareStyle} className="post__authorLinkFlare">
            {authorFlareText}{" "}
          </span>{" "}
          {createdAt}
        </label>
        <div className="post__buttonContainer">
          <div className="post__iconButton">
            <FiMessageSquare />
            <label>{`${noOfComments} Comments`}</label>
          </div>
          <div className="post__iconButton">
            <FiShare2 />
            <label>Share</label>
          </div>
          <div className="post__iconButton">
            <FiBookmark />
            <label>Save</label>
          </div>
          <div className="post__iconButton">
            <FiEyeOff />
            <label>Hide</label>
          </div>
          <div className="post__iconButton">
            <FiFlag />
            <label>Report</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
