import { useCallback, useEffect, useRef, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { fetchLists, relativeTime, thousandFormatter } from "../../utils";
import Post from "../post/Post";
import "./Posts.scss";

interface PostsProps {
  filterType: string;
}
const Posts = ({ filterType }: PostsProps) => {
  console.log("FILKTER", filterType);
  const [lists, setLists] = useState([]);

  useEffect((): void => {
    getLists();
  }, [filterType]);

  const getLists = async () => {
    const list = await fetchLists(filterType);
    console.log("LISSSSS", list);
    setLists(list);
  };

  const renderPosts = () => {
    return lists.map((item: any, index: number) => {
      const {
        link_flair_text,
        link_flair_text_color,
        link_flair_background_color,
        author_flair_text,
        author_flair_text_color,
        author_flair_background_color,
        title,
        author_fullname,
        num_comments,
        ups,
        created
      } = item.data;

      let linkFlare = {
        flareText: link_flair_text,
        flareTextColor:
          link_flair_text_color === "light" ? "#ffffff" : "#000000",
        flareBackground: link_flair_background_color
      };

      let authorFlare = {
        authorFlareText: author_flair_text,
        authorFlareTextColor:
          author_flair_text_color === "light" ? "#ffffff" : "#000000",
        authorFlareBackground: author_flair_background_color
      };
      return (
        <Post
          key={index}
          title={title}
          createdBy={`Posted by ${author_fullname}`}
          noOfComments={thousandFormatter(num_comments, 1)}
          votes={thousandFormatter(ups, 1)}
          authorFlare={authorFlare ?? {}}
          linkFlare={linkFlare ?? {}}
          createdAt={relativeTime(created)}
        />
      );
    });
  };

  return (
    <div className="posts">{lists.length > 0 ? renderPosts() : <></>}</div>
  );
};

export default Posts;
