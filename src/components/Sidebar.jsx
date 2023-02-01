import React, { useState } from 'react';
import "../styles/components/sidebar.scss";
import { NavLink } from 'react-router-dom';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

const Sidebar = () => {

    const [hide, sethide] = useState(0);

    const toggle = (index) => {
        if (hide === index) {
            sethide();
        } else {
            sethide(index);
        }
    };

    return (
        <div className='sidebar'>
            <div className='top'>
                <span className='logo'>Logo</span>
            </div>
            <div className='center'>
                <ul>
                    <NavLink to="/coursesoutline/?title=Course Outline" className='link' activeclassname="active">
                        <li>
                            Course Outline
                        </li>
                    </NavLink>
                    <NavLink to="/notes/?notes=Notes" className='link' activeclassname="active">
                        <li>
                            Notes
                        </li>
                    </NavLink>

                    {/* Assignment */}
                    <div className='sidebar_assignment_wrapper'>
                        <div className='assignment_heading_wrapper' onClick={() => toggle(1)}>
                            {
                                hide === 1
                                    ? (<div className='assignment_heading_Up_Arrow'><span>Assignment</span> <span><SlArrowUp /></span></div>)
                                    : (<div className='assignment_heading_down_Arrow'> <span>Assignment</span> <span ><SlArrowDown /></span></div>)
                            }
                        </div>

                        <div className='assignment_link_wrapper'>
                            <div className={
                                hide === 1
                                    ? "accordion_content show"
                                    : "accordion_content"
                            }>
                                <NavLink to="/assignments/?assignments=Assignments" className='link' activeclassname="active">
                                    Assignments
                                </NavLink>
                                <NavLink to="/assignmentsubmission/?assignmentsubmission=Assignment Submisson" className='link' activeclassname="active">
                                    Assignment Submission
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    {/* Quizzes */}
                    <div className='sidebar_assignment_wrapper'>
                        <div className='assignment_heading_wrapper' onClick={() => toggle(2)}>
                            {
                                hide === 2
                                    ? (<div className='assignment_heading_Up_Arrow'><span>Quizzes</span> <span><SlArrowUp /></span></div>)
                                    : (<div className='assignment_heading_down_Arrow'> <span>Quizzes</span> <span><SlArrowDown /></span></div>)
                            }
                        </div>

                        <div className='assignment_link_wrapper'>
                            <div className={
                                hide === 2
                                    ? "accordion_content show"
                                    : "accordion_content"
                            }>
                                <NavLink to="/quizzes/?quizzes=Quizzes" className='link' activeclassname="active">
                                    Quizzes
                                </NavLink>
                                <NavLink to="/quizzsubmission/?quizzsubmission=Quizz Submission" className='link' activeclassname="active">
                                    Quizz Submission
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    {/* Papers */}
                    <div className='sidebar_assignment_wrapper'>
                        <div className='assignment_heading_wrapper' onClick={() => toggle(3)}>
                            {
                                hide === 3
                                    ? (<div className='assignment_heading_Up_Arrow'><span> Papers</span> <span><SlArrowUp /></span></div>)
                                    : (<div className='assignment_heading_down_Arrow'> <span> Papers</span> <span><SlArrowDown /></span></div>)
                            }
                        </div>

                        <div className='assignment_link_wrapper'>
                            <div className={
                                hide === 3
                                    ? "accordion_content show"
                                    : "accordion_content"
                            }>
                                <NavLink to="/papers/?paper=Papers" className='link accordion_content_link' activeclassname="active">
                                    Papers
                                </NavLink>
                                <NavLink to="/papersubmisson/?papersubmisson=Paper Submission" className='link' activeclassname="active">
                                    Paper Submission
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <NavLink to="/reportcard/?reportCard=Report Card" className='link' activeclassname="active">
                        <li>
                            Report Card
                        </li>
                    </NavLink>
                </ul>
            </div>
        </div >
    )
}

export default Sidebar
