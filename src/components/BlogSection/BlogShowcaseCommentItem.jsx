import React from "react";

function BlogShowcaseCommentItem({image}) {
  return (
    <div className="blogShowcaseCommentItem">
      <div className="commentItemImageContainer">
        <img src={image} alt="Person foto" />
      </div>
      <div className="commentContent">
        <div className="name sectionSecondaryHeader">Jane Doe</div>
        <span className="date">June 10, 2018 at 5:39 am</span>
        <p className="comment sectionParagraph">
          Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat
          flexitarian four loko
        </p>
        <button className="replyButton">Reply</button>
      </div>
    </div>
  );
}

export default BlogShowcaseCommentItem;
