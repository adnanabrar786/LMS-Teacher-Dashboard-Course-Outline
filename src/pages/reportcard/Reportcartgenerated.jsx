import React from 'react';
import "../../styles/pages/reportcard/reportcardgenerate.scss";
import { FaLock } from 'react-icons/fa';

const Reportcartgenerated = () => {
    return (
        <div className='reportCardGenerated_wrapper'>
                <div className='reportCardGenerated_details_wrapper'>
                    <div className='reportCardGenerated_details_left_wrapper'>
                        <div>
                            <span className='reportCardGenerated_details_left_bold'>Course Title :</span>
                            <span className='reportCardGenerated_details_left_light'>Course Title</span>
                        </div>
                        <div>
                            <span className='reportCardGenerated_details_left_bold'>Time :</span>
                            <span className='reportCardGenerated_details_left_light'>Time</span>
                        </div>
                        <div>
                            <span className='reportCardGenerated_details_left_bold'>Teacher :</span>
                            <span className='reportCardGenerated_details_left_light'>Teacher</span>
                        </div>
                        <div>
                            <span className='reportCardGenerated_details_left_bold'>Marks Locked :</span>
                            <span className='reportCardGenerated_details_left_light'>30/06/2022 3:34 Pm</span>
                        </div>
                    </div>
                    <div className='reportCardGenerated_details_right_wrapper'>
                        <div>
                            <span className='reportCardGenerated_right_bold'>Mids Submitted :</span>
                            <span className='reportCardGenerated_right_light'>30/06/2022 3:34 Pm</span>
                        </div>
                        <div>
                            <span className='reportCardGenerated_right_bold'>Finals Submitted :</span>
                            <span className='reportCardGenerated_right_light'>30/06/2022 3:34 Pm</span>
                        </div>
                        <div>
                            <span className='reportCardGenerated_right_bold'>Assignment Submitted :</span>
                            <spa className='reportCardGenerated_right_light'>30/06/2022 3:34 Pm</spa>
                        </div>
                        <div>
                            <span className='reportCardGenerated_right_bold'>Quiz Submitted :</span>
                            <span className='reportCardGenerated_right_light'>30/06/2022 3:34 Pm</span>
                        </div>
                    </div>
                </div>

                <div className='reportCardGenerated_button_wrapper'>
                    <button className='reportCardGenerated_btn_green'> + Add Assignment</button>
                    <button className='reportCardGenerated_btn_green'> + Add Quiz</button>
                    <button className='reportCardGenerated_btn_purple'>Compile Mid</button>
                    <button className='reportCardGenerated_btn_purple'>Compile Finals</button>
                    <button className='reportCardGenerated_btn_purple'>Compile Assignments</button>
                    <button className='reportCardGenerated_btn_purple'>Compile Quiz</button>
                    <button className='reportCardGenerated_btn_skyblue'>Compile Finals</button>
                    <button className='reportCardGenerated_btn_grey'>Export</button>
                    <button className='reportCardGenerated_btn_red'>Submit Marks</button>
                    <button className='reportCardGenerated_btn_red'>Save</button>
                </div>

                <div className="reportCardGenerated_header_wrapper">
                    <div className="reportCardGenerated_header_div">Student Id</div>
                    <div className="reportCardGenerated_header_div">Name</div>
                    <div className="reportCardGenerated_header_assignment_wrapper">
                        <div className="reportCardGenerated_header_heading"> <span>Assignment</span> </div>
                        <div>
                            <span className="reportCardGenerated_header__span">1</span>
                            <span className="reportCardGenerated_header__span">2</span>
                        </div>
                    </div>
                    <div className="reportCardGenerated_header_assignment_wrapper">
                        <div className="reportCardGenerated_header_heading"><span>Quiz</span></div>
                        <div>
                            <span className="reportCardGenerated_header__span">1</span>
                            <span className="reportCardGenerated_header__span">2</span>
                        </div>
                    </div>
                    <div className="reportCardGenerated_header_div">Mid</div>
                    <div className="reportCardGenerated_header_div">Final</div>
                    <div className="reportCardGenerated_header_div">Total</div>
                    <div className="reportCardGenerated_header_div">Grade</div>
                    <div className="reportCardGenerated_action_wrapper">
                        <span>Action </span>
                        <span><FaLock className="reportCardGenerated_action___icon" />Lock All</span>
                    </div>
                </div>

                <div className="reportCardGenerated_middle_wrapper">
                    {/* one */}
                    <div className="reportCardGenerated_middle_one_div">
                        <div>01</div>
                        <div>Name</div>
                        <div>
                            <span>10</span>
                            <span>10</span>
                        </div>
                        <div>
                            <span>10</span>
                            <span>10</span>
                        </div>
                        <div>10</div>
                        <div>10</div>
                        <div>60</div>
                        <div>B</div>
                        <div><FaLock className="reportCardGenerated_action_icon" /> Lock</div>
                    </div>
                    {/* one */}
                    <div className="reportCardGenerated_middle_one_div">
                        <div>01</div>
                        <div>Name</div>
                        <div>
                            <span>10</span>
                            <span>10</span>
                        </div>
                        <div>
                            <span>10</span>
                            <span>10</span>
                        </div>
                        <div>10</div>
                        <div>10</div>
                        <div>60</div>
                        <div>B</div>
                        <div><FaLock className="reportCardGenerated_action_icon" /> Lock</div>
                    </div>
                    {/* one */}
                    <div className="reportCardGenerated_middle_one_div">
                        <div>01</div>
                        <div>Name</div>
                        <div>
                            <span>10</span>
                            <span>10</span>
                        </div>
                        <div>
                            <span>10</span>
                            <span>10</span>
                        </div>
                        <div>10</div>
                        <div>10</div>
                        <div>60</div>
                        <div>B</div>
                        <div><FaLock className="reportCardGenerated_action_icon" /> Lock</div>
                    </div>
                    {/* one */}
                    <div className="reportCardGenerated_middle_one_div">
                        <div>01</div>
                        <div>Name</div>
                        <div>
                            <span>10</span>
                            <span>10</span>
                        </div>
                        <div>
                            <span>10</span>
                            <span>10</span>
                        </div>
                        <div>10</div>
                        <div>10</div>
                        <div>60</div>
                        <div>B</div>
                        <div><FaLock className="reportCardGenerated_action_icon" /> Lock</div>
                    </div>
                    {/* one */}
                    <div className="reportCardGenerated_middle_one_div">
                        <div>01</div>
                        <div>Name</div>
                        <div>
                            <span>10</span>
                            <span>10</span>
                        </div>
                        <div>
                            <span>10</span>
                            <span>10</span>
                        </div>
                        <div>10</div>
                        <div>10</div>
                        <div>60</div>
                        <div>B</div>
                        <div><FaLock className="reportCardGenerated_action_icon" /> Lock</div>
                    </div>
                    {/* one */}
                    <div className="reportCardGenerated_middle_one_div">
                        <div>01</div>
                        <div>Name</div>
                        <div>
                            <span>10</span>
                            <span>10</span>
                        </div>
                        <div>
                            <span>10</span>
                            <span>10</span>
                        </div>
                        <div>10</div>
                        <div>10</div>
                        <div>60</div>
                        <div>B</div>
                        <div><FaLock className="reportCardGenerated_action_icon" /> Lock</div>
                    </div>
                    {/* one */}
                    <div className="reportCardGenerated_middle_one_div">
                        <div>01</div>
                        <div>Name</div>
                        <div>
                            <span>10</span>
                            <span>10</span>
                        </div>
                        <div>
                            <span>10</span>
                            <span>10</span>
                        </div>
                        <div>10</div>
                        <div>10</div>
                        <div>60</div>
                        <div>B</div>
                        <div><FaLock className="reportCardGenerated_action_icon" /> Lock</div>
                    </div>
                    {/* one */}
                    <div className="reportCardGenerated_middle_one_div">
                        <div>01</div>
                        <div>Name</div>
                        <div>
                            <span>10</span>
                            <span>10</span>
                        </div>
                        <div>
                            <span>10</span>
                            <span>10</span>
                        </div>
                        <div>10</div>
                        <div>10</div>
                        <div>60</div>
                        <div>B</div>
                        <div><FaLock className="reportCardGenerated_action_icon" /> Lock</div>
                    </div>
                    {/* one */}
                    <div className="reportCardGenerated_middle_one_div">
                        <div>01</div>
                        <div>Name</div>
                        <div>
                            <span>10</span>
                            <span>10</span>
                        </div>
                        <div>
                            <span>10</span>
                            <span>10</span>
                        </div>
                        <div>10</div>
                        <div>10</div>
                        <div>60</div>
                        <div>B</div>
                        <div><FaLock className="reportCardGenerated_action_icon" /> Lock</div>
                    </div>
                    {/* one */}
                    <div className="reportCardGenerated_middle_one_div">
                        <div>01</div>
                        <div>Name</div>
                        <div>
                            <span>10</span>
                            <span>10</span>
                        </div>
                        <div>
                            <span>10</span>
                            <span>10</span>
                        </div>
                        <div>10</div>
                        <div>10</div>
                        <div>60</div>
                        <div>B</div>
                        <div><FaLock className="reportCardGenerated_action_icon" /> Lock</div>
                    </div>
                </div>
        </div>
    )
}

export default Reportcartgenerated
