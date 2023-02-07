import React, { useState } from 'react';
import "../styles/components/sidebar.scss";
import { NavLink } from 'react-router-dom';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

const Sidebar = ({setNavbarTitle }) => {

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
                    <NavLink onClick={() => setNavbarTitle("Course Outline")} to="/coursesoutline" className='link' activeclassname="active">
                        <li>
                            Course Outline
                        </li>
                    </NavLink>
                    <NavLink onClick={() => setNavbarTitle("Notes")} to="/notes" className='link' activeclassname="active">
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
                                <NavLink onClick={() => setNavbarTitle("Assignments")} to="/assignments" className='link' activeclassname="active">
                                    Assignments
                                </NavLink>
                                <NavLink onClick={() => setNavbarTitle("Assignment Submission")} to="/assignmentsubmission" className='link' activeclassname="active">
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
                                <NavLink onClick={() => setNavbarTitle("Quizzes")}  to="/quizzes" className='link' activeclassname="active">
                                    Quizzes
                                </NavLink>
                                <NavLink onClick={() => setNavbarTitle("Quizz Submission")}  to="/quizzsubmission" className='link' activeclassname="active">
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
                                <NavLink onClick={() => setNavbarTitle("Papers")} to="/papers" className='link accordion_content_link' activeclassname="active">
                                    Papers
                                </NavLink>
                                <NavLink onClick={() => setNavbarTitle("Paper Submission")} to="/papersubmisson" className='link' activeclassname="active">
                                    Paper Submission
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <NavLink onClick={() => setNavbarTitle("Report Card")} to="/reportcard" className='link' activeclassname="active">
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
