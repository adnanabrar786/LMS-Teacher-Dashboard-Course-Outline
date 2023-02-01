import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courseoutline from "../pages/Courseoutline";
import Notes from "../pages/Notes";
import Reportcard from "../pages/Reportcard";
import "../styles/router.scss";
import Sidebar from '../components/Sidebar';
import Assignment from "../pages/assignment/Assignment";
import Assignmentsubmission from "../pages/assignment/Assignmentsubmission";
import Quizzes from "../pages/quizzes/Quizzes";
import Quizsubmission from "../pages/quizzes/Quizsubmission";
import Papers from "../pages/papers/Papers";
import Paperssubmisson from "../pages/papers/Paperssubmisson";
import Check from "../pages/papers/Check";

const Router = () => {

    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        setisLoading(false)
        return () => {
            setisLoading(true)
        };
    }, []);


    return (
        <div className='router_container'>
            {
                isLoading ?
                    <div className='loading_spinner_div'>
                        <div className="spinner-container">
                            <div className="loading-spinner">
                            </div>
                        </div>
                    </div>
                    :
                    <BrowserRouter>
                        <div className='router_sidebar'>
                            <Sidebar />
                        </div>
                        <div className='router_routes'>
                            <Routes>
                                <Route path="/courses/:course/:outline" element={<Courseoutline />} />
                                <Route path="/notes/:notes" element={<Notes />} />
                                <Route path="/assignments/:assignments" element={<Assignment />} />
                                <Route path="/assignment/:assignment/:submission" element={<Assignmentsubmission />} />
                                <Route path="/quizzes/:quizzes" element={<Quizzes />} />
                                <Route path="/quizzsubmission/:quizz/:submission" element={<Quizsubmission />} />
                                <Route path="/papers/:papers" element={<Papers />} />
                                <Route path="/papersubmisson/:paper/:submisson" element={<Paperssubmisson />} />
                                {/* <Route path="/:papers/:Submisson/check" element={<Check />} /> */}
                                <Route path="/reportcard/:report/:card" element={<Reportcard />} />
                            </Routes>
                        </div>
                    </BrowserRouter>
            }

        </div>

    )
}

export default Router
