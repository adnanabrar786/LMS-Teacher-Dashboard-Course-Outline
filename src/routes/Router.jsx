import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courseoutline from "../pages/Courseoutline";
import Notes from "../pages/Notes";
import Reportcard from "../pages/reportcard/Reportcard";
import "../styles/router.scss";
import Sidebar from '../components/Sidebar';
import Assignment from "../pages/assignment/Assignment";
import Assignmentsubmission from "../pages/assignment/Assignmentsubmission";
import Quizzes from "../pages/quizzes/Quizzes";
import Quizsubmission from "../pages/quizzes/Quizzubmission";
import Papers from "../pages/papers/Papers";
import Paperssubmisson from "../pages/papers/Paperssubmisson";
import Reportcartgenerated from '../pages/reportcard/Reportcartgenerated';
import Checking from '../pages/Checking';
import Navbar from '../components/Navbar';

const Router = () => {

    const [isLoading, setisLoading] = useState(true);
    const [navbarTitle, setNavbarTitle] = useState('');

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
                            <Sidebar setNavbarTitle={setNavbarTitle} navbarTitle={navbarTitle} />
                        </div>
                        <div className='router_routes'>
                            <Navbar setNavbarTitle={setNavbarTitle} navbarTitle={navbarTitle} />
                            <Routes>
                                <Route path="/coursesoutline" element={<Courseoutline />} />
                                <Route path="/notes" element={<Notes />} />
                                <Route path="/assignments" element={<Assignment />} />
                                <Route path="/assignmentsubmission" element={<Assignmentsubmission />} />
                                <Route path="/quizzes" element={<Quizzes />} />
                                <Route path="/quizzsubmission" element={<Quizsubmission />} />
                                <Route path="/papers/" element={<Papers />} />
                                <Route path="/papersubmisson" element={<Paperssubmisson />} />
                                <Route path="/reportcard" element={<Reportcard />} />
                                <Route path="/report/generate" element={<Reportcartgenerated />} />
                                <Route path="/checking" element={<Checking />} />
                            </Routes>
                        </div>
                    </BrowserRouter>
            }
        </div>

    )
}

export default Router
