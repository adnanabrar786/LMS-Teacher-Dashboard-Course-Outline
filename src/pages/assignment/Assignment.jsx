import React from 'react'
import Navbar from '../../components/Navbar';
import "../../styles/pages/assignment/assignment.scss";
import "../../styles/components.scss";

const Assignment = () => {
  return (
    <div className='assignment_wrapper'>
      <div>
        <Navbar />
      </div>

      <div className='assignment_container'>

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

        <div className="assignment_button_wrapper">
          <button className="assignment_print_btn">Print</button>
          <button className="assignment_add_btn">+ Add Content</button>
        </div>


        <div className="assignment_header_wrapper">
          <div>Assignment</div>
          <div>File</div>
          <div>Submission</div>
          <div>Solution</div>
          <div>Remarks</div>
          <div>Total Marks</div>
          <div>Deadline</div>
          <div>Action</div>
        </div>

        <div className="assignment_middle_wrapper">
          <div className="assignment_middle_one_div">
            <div className="assignment_name">Assignment</div>
            <div className="assignment_download_div"> <button>Download</button></div>
            <div className="assignment_submission_number"><span>20</span></div>
            <div className="assignment_solution">Solution</div>
            <div className="assignment_remarks">Remarks</div>
            <div className="assignment_total_marks"><span>20</span></div>
            <div className="assignment_dadline">Deadline</div>
            <div className="assignment_action">Action</div>
          </div>
        </div>

      </div>



    </div>
  )
}

export default Assignment