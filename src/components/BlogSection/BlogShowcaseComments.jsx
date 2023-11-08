import React from 'react'
import BlogShowcaseCommentItem from './BlogShowcaseCommentItem';
import author1 from '../../images/AboutMe/Testimonials/author-1.jpg';
import author2 from '../../images/AboutMe/Testimonials/author-2.jpg';
import author3 from '../../images/AboutMe/Testimonials/author-3.jpg';


function BlogShowcaseComments() {
  return (
    <div className="postComments">
        <h4 className='sectionSecondaryHeader'>Post comments</h4>
        <BlogShowcaseCommentItem image={author1}/>
        <BlogShowcaseCommentItem image={author2}/>
        <BlogShowcaseCommentItem image={author3}/>
    </div>
  )
}

export default BlogShowcaseComments
