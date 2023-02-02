import React from 'react';
import "../styles/components/navbar.scss";
import { BiBell } from 'react-icons/bi';
import teacherimg from "./asserts/teacherimg.png";
// import { useParams } from 'react-router-dom';

import { useSearchParams } from 'react-router-dom';

const Navbar = () => {

  // const [searchParams, setSearchParams] = useSearchParams();
  const [searchParams] = useSearchParams();

  const coureOutline = searchParams.get('title');
  const notes = searchParams.get('notes');
  const assignments = searchParams.get('assignments');
  const assignmentSubmission = searchParams.get('assignmentsubmission');
  const quizzes = searchParams.get('quizzes');
  const quizzSubmission = searchParams.get('quizzsubmission');
  const paper = searchParams.get('paper');
  const papersubmisson = searchParams.get('papersubmisson');
  const reportCard = searchParams.get('reportCard');


  // const {
  //   // course, outline,
  //   // assignment, submission, 
  //   // notes,
  //   //  assignments,
  //   // quizzes, 
  //   // quizz, 
  //   // papers, paper, submisson,
  //   // report, card 
  // } = useParams();

  return (
    <>
      <nav>
        <div>

          <span className='heading'>
            {coureOutline} {notes} {assignments} {assignmentSubmission} {quizzes} {quizzSubmission}
            {reportCard} {paper} {papersubmisson}
          </span>
          {/* <span className='heading'>
            {course} {outline}
            {assignment}
            {quizz}
            {submission}
            {notes}
            {assignments}
            {quizzes}
            {papers} {paper} {submisson}
            {report} {card}
          </span> */}
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