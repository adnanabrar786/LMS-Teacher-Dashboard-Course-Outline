import React from 'react';
import Navbar from '../components/Navbar';
import "../styles/pages/courseouline.scss";

const Courseoutline = () => {
  return (
    <div className='courseOutline_wrapper'>
      <div>
        <Navbar />
      </div>

      <div className='courseOutline_container'>
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

export default Courseoutline