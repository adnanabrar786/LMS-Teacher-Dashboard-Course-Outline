import React from 'react';
import "../../styles/pages/quizzes/quizzsubmission.scss";
import "../../styles/components.scss";
import "../../styles/submission.scss";

const Quizzubmission = () => {
  return (
    <div className='quizzsubmission_wrapper'>
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

        <div className="assignment_submisson_button_wrapper">
          <select>
            <option>Select Assignment</option>
            <option>Physics</option>
            <option>Maths</option>
          </select>
          <button>Annotate submissions</button>
        </div>

        <div className="assignment_submisson_header_wrapper">
          <div>Student ID</div>
          <div>Name</div>
          <div>Submission File</div>
          <div>Marked</div>
          <div>Submitted On</div>
        </div>

        <div className="assignment_submisson_middle_wrapper">
          <div className="assignment_submisson_middle_one_div">
            <div className="assignment_submisson__id">01</div>
            <div className="assignment_submisson__name">Name </div>
            <div className="assignment_submisson_annootate_div"> <button>Annotate</button></div>
            <div className="assignment_submisson_marked"><button>Marked</button></div>
            {/* <div className="assignment_submisson_not_marked"><button>Not Marked</button></div> */}
            <div className="assignment_submisson__submitted">
              <span>28-09-2022</span>
              <span>7:45:24 Pm</span>
            </div>
          </div>
        </div>

        {/* <div className="quizz_submisson_button_wrapper">
          <select>
            <option>Select Assignment</option>
            <option>Physics</option>
            <option>Maths</option>
          </select>
          <button>Annotate submissions</button>
        </div>

        <div className="quizz_submisson_header_wrapper">
          <div>Student ID</div>
          <div>Name</div>
          <div>Submission File</div>
          <div>Marked</div>
          <div>Submitted On</div>
        </div>

        <div className="quizz_submisson_middle_wrapper">
          <div className="quizz_submisson_middle_one_div">
            <div className="quizz_submisson__id">01</div>
            <div className="quizz_submisson__name">Name </div>
            <div className="quizz_submisson_annootate_div"> <button>Annotate</button></div>
            <div className="quizz_submisson_marked"><button>Marked</button></div>
            <div className="quizz_submisson__submitted">
              <span>28-09-2022</span>
              <span>7:45:24 Pm</span>
            </div>
          </div>
        </div> */}
    </div>
  )
}

export default Quizzubmission;