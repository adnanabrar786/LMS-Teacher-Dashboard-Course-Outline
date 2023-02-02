import React from 'react';
import Navbar from '../../components/Navbar';
import "../../styles/pages/reportcard/reportcard.scss";
import "../../styles/components.scss";
import { TbEdit } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Reportcard = () => {
  return (
    <div className='reportCard_wrapper'>
      <div>
        <Navbar />
      </div>

      <div className='reportCard_container'>
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

        <div className="reportCard_button_wrapper">
          <select>
            <option>Mid Term</option>
            <option>Final Term</option>
            <option>Monthly</option>
          </select>
          <button>
            <Link to="/report/generate/?title=Generate Report Card" className="reportCard_link">Generate Report Card</Link>
          </button>
        </div>

        <div className="reportCard_header_wrapper">
          <div>Student Id</div>
          <div>Name</div>
          <div>Total Marks</div>
          <div>Obtained marks</div>
          <div>Marked On</div>
          <div>Action</div>
        </div>

        <div className="reportCard_middle_wrapper">
          <div className="reportCard_middle_one_div">
            <div className="reportCard_id">01</div>
            <div className="reportCard_id">Name</div>
            <div className="reportCard_total_marks"><span>30</span></div>
            <div className="reportCard_total_marks"><span>15</span></div>
            <div className="reportCard_marked_on">
              <span>28-09-2022</span>
              <span>7:45:24 Pm</span>
            </div>
            <div className="reportCard_edit">
              {/* <span>
                <TbEdit className="icon" />
              </span> */}
              <TbEdit className="icon" />

              <span>Edit</span>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Reportcard;
