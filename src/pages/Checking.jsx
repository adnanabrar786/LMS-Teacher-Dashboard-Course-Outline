import React from 'react';
import "../styles/pages/checking.scss";
import { MdArrowBackIosNew } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';

const Checking = () => {
    return (
        <div className='checking_wrapper'>
            <div className='checking_center_wrapper'>
                <div className='checking_center_header_wrapper'>
                    <div className='checking_center_header_container'>
                        <div className='course_details_wrapper'>
                            <div>
                                <span className='bold'>Course Title</span>
                                <span>Course Title</span>
                            </div>
                            <div>
                                <span className='bold'>Assignment Name</span>
                                <span>Assignment Name</span>
                            </div>
                            <div>
                                <span className='bold'>Submitted On</span>
                                <span>Submitted On</span>
                            </div>
                        </div>
                        <div className='student_name_wrapper'>
                            <div className='arrow_red_circle'>
                                <MdArrowBackIosNew className='icon' />
                            </div>
                            <div className='student_name'>
                                Student Name
                            </div>
                            <div className='arrow_red_circle'>
                                <MdArrowForwardIos className='icon' />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='checking_center_feature_wrapper'>
                    checking_center_feadture_wrapper
                </div>
                <div className='checking_center_notepad_wrapper'>
                    checking_center_notepad_wrapper
                </div>
                <div className='button_wrapper'>
                    <div className='button_container'>
                        <div>
                            <input type="checkbox" />
                            <span>Notify Student</span>
                        </div>
                        <div>
                            <button className='red_btn'>Save Changes</button>
                            <button className='red_btn'>Save and show next</button>
                            <button className='grey_btn'>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='checking_right_wrapper'>
                <div className='checking_right_container'>
                    <h2 className='heading'>Submission Annotation</h2>
                    <div className='_sub_heading'>
                        <span className='_sub_heading_bold'>Graded</span>
                        <span className='_sub_heading_not_bold'>Not graded</span>
                    </div>
                    <div className='_sub_heading margin_top'>
                        <span className='_sub_heading_bold'>Time</span>
                        <span>7 days 3 hours remaining</span>
                    </div>

                    <div className='grade_wrapper'>
                        <h4>Grade <span>(out of 100)</span></h4>
                        <input type="text" />
                    </div>

                    <div className='gradebook_wrapper'>
                        <h4>Current Grade <span>(in gradebook)</span></h4>
                        <p>A+</p>
                    </div>

                    <div className='feedback_wrapper'>
                        <h4>Feedback</h4>
                        <div>div</div>
                    </div>

                    <div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Checking
