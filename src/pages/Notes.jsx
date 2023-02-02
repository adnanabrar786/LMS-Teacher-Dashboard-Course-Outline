import React from 'react';
import Navbar from '../components/Navbar';
import "../styles/pages/notes.scss";
import "../styles/components.scss";
import { BsThreeDots } from 'react-icons/bs';
import { TbEdit } from 'react-icons/tb';
import { AiTwotoneDelete } from 'react-icons/ai';

const Notes = () => {
  return (
    <div className="notes_wrapper">
      <div>
        <Navbar />
      </div>

      <div className='notes_container'>
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

        <div className="notes_button_wrapper">
          <button className="notes_print_btn">Print</button>
          <button className="notes_add_btn">+ Add Content</button>
        </div>

        <div className="notes_header_wrapper">
          <div>Lecture name</div>
          <div>Lecture file</div>
          <div>Video link</div>
          <div>Reference</div>
          <div>Action</div>
        </div>


        <div className="notes_middle_wrapper">
          <div className="notes_middle_one_div">
            <div className="lecture_file">Lecture name</div>
            <div className="download_button_div"> <button>Download</button></div>
            <div className="video_link">www.videolink.com</div>
            <div className="reference">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="action">
              <BsThreeDots className="three_dots_icon" />
              <div className="edit_delete_div_wrapper">
                <div> <TbEdit className="edit_icon"/><span>Edit</span></div>
                <div><AiTwotoneDelete className="delete_icon" /> <span>Delete</span></div>
              </div>
            </div>
          </div>






        </div>

      </div>
    </div>
  )
}

export default Notes;