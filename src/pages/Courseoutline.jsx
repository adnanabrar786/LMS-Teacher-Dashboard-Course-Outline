import React from 'react';
import Navbar from '../components/Navbar';
import "../styles/pages/courseouline.scss";
import "../styles/components.scss";

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

        <div className="coursedetails_button_wrapper">
          <button className="coursedetails_print_btn">Print</button>
          <button className="coursedetails_add_btn">+ Add Content</button>
        </div>

        <div className="header_wrapper">
          <div className="outline">Outline </div>
          <div className="action">Action</div>
        </div>

        <div className="middle_wrapper">
          {/* one */}
          <div className="middle_wrapper_one_div">
            <div className="outline_name">Outline Name</div>
            <div className="red_circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* two */}
          <div className="middle_wrapper_one_div">
            <div className="outline_name">Outline Name</div>
            <div className="red_circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* three */}
          <div className="middle_wrapper_one_div">
            <div className="outline_name">Outline Name</div>
            <div className="red_circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

      </div>




    </div>
  )
}

export default Courseoutline