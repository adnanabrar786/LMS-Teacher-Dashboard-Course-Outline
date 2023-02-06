import React, { useState } from "react";
import "../../styles/pages/quizzes/quizzes.scss";
import "../../styles/components.scss";
import "../../styles/submissionnot.scss";

const Quizzes = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  console.log(selectedImage);

  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  return (
    <div className='quizzes_wrapper'>
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
          <div className="assignment_solution">
            <input type="file"
              name="file"
              id="file"
              className="inputfile"
              onChange={(event) => {
                console.log(event.target.files[0]);
                console.log(event.target.files[0].name);
                setSelectedImage(event.target.files[0].name);
              }}
            />
            {
              selectedImage ? <label htmlFor="file">{selectedImage}</label> :
                <label htmlFor="file">+ Add Solution</label>
            }
          </div>
          <div className="assignment_hover_view"><button>Hover to View</button></div>
          <div className="assignment_total_marks"><span>20</span></div>
          <div className="assignment_deadline">
            <span>Extend Date</span>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            {/* <span>{date}</span> */}
          </div>
          <div className="assignment_action_red_circle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quizzes