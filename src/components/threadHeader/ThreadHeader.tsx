import "./ThreadHeader.scss";

const ThreadHeader = () => {
  return (
    <div className="threadHeader">
      <div className="threadHeader__top">
        <div className="threadHeader__nameContainer">
          <h1 className="threadHeader__name">{"wallstreetbets"}</h1>
          <label className="threadHeader__threadId">{"r/wallstreetbets"}</label>
        </div>
        <button className="threadHeader__button">Join</button>
      </div>

      <div className="threadHeader__nav">
        <label>Posts</label>
        <label>Wiki</label>
        <label>FAQ</label>
        <label>Daily Discussion</label>
        <label>Thread Filters</label>
        <label>Discord / Twitter</label>
        <label>Brand Use Guidelines</label>
      </div>
    </div>
  );
};

export default ThreadHeader;
