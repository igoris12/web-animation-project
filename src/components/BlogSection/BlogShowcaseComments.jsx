import React from 'react'
import BlogShowcaseCommentItem from './BlogShowcaseCommentItem';

function BlogShowcaseComments() {
  return (
    <div className="postComments">
        <h4>Post comments</h4>
        <BlogShowcaseCommentItem/>
        <BlogShowcaseCommentItem/>
        <BlogShowcaseCommentItem/>
    </div>
  )
}

export default BlogShowcaseComments
