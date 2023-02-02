import React from 'react';
import Navbar from '../../components/Navbar';
import "../../styles/pages/quizzes/quizzsubmission.scss";
import "../../styles/components.scss";

const Quizzubmission = () => {
  return (
    <div className='quizzsubmission_wrapper'>
    <div>
      <Navbar />
    </div>
    <div className='quizzsubmission_container'>
      <div className='courseOutline_course_wrapper'>
        <div className='courseOutline_course_header'>
          <div className='courseOutline_course_title'>Course title</div>
          <div className='courseOutline_course_time'>
            <span>Time</span>
            <span>Teacher</span>
          </div>
        </div>
        <div className='courseOutline_course_detail'>
          <div className='courseOutline_course_title'>Course title</div>
          <div className='courseOutline_course_time'>
            <span>Time</span>
            <span>Teacher</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Quizzubmission;