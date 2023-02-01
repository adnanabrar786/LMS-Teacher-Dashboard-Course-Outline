import React from 'react';
import "../styles/components/navbar.scss";
import { BiBell } from 'react-icons/bi';
import teacherimg from "./asserts/teacherimg.png";
import { useParams } from 'react-router-dom';

const Navbar = () => {

  // const { course, outline, notes, reportcard, assignment, submission, papers, report, card } = useParams();

  // const {
  //   course, outline, notes, assignments,
  //   assignment, submission, quizzes, quizz, papers
  //   , paper, submisson, report, card
  // } = useParams();

  // const {
  //   course, outline, notes
  // } = useParams();

  // console.log(course);
  // console.log(outline);
  // console.log(notes);

  const {
    course, outline, assignment, submission, notes, assignments,
    quizzes, quizz, papers, paper, submisson,
    report, card } = useParams();

  return (
    <>
      <nav>
        <div>

          <span className='heading'>
            {course} {outline} {assignment}  {quizz} {submission} {notes} {assignments} {quizzes}
            {papers} {paper} {submisson}  {report} {card}
          </span>
          {/* <span className='heading'>{course} {outline} {notes} {reportcard} {assignment} {submission} {papers} {report} {card}</span> */}
        </div>
        <ul>
          <li className='notification_icon'><BiBell className='icon' /></li>
          <li className='profile_pic'><img src={teacherimg} alt="teacherimg" /></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar