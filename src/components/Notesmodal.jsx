import React, { useState } from 'react';
import "../styles/components/notesmodal.scss";

const Notesmodal = ({ modalOpen, setModalOpen }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    // const [selectedBook, setSelectedBook] = useState(null);

    return (
        <div>
            {modalOpen &&
                <>
                    <div className="nodemodal_modalBackground">
                        <div className="nodemodal_modalContainer">
                            <div className="nodemodal_modal_header" >
                                <h2 className="heading">Update Lecture</h2>
                            </div>

                            <div className="nodemodal_modal_detail">
                                <div className="nodemodal_input_wrapper">
                                    <div className="nodemodal_input_name">Lecture Name</div>
                                    <div className="nodemodal_input_div"><input type="text" placeholder='Lecture Name' /> </div>
                                </div>
                                {/* <div className="library_input_wrapper">
                                    <div className="library_input_name">Author Name</div>
                                    <div className="library_input_div"><input type="text" placeholder='Author' /> </div>
                                </div> */}


                                {/*image add optional */}
                                <div className="nodemodal_image_wrapper">
                                    <div className="nodemodal_image_name">Lecture File</div>
                                    <div className="nodemodal_image_div"><input type="text" placeholder={selectedImage} /> </div>
                                </div>

                                <div className="upload_image_button_div">
                                    <input
                                        type="file"
                                        name="myImage"
                                        onChange={(event) => {
                                            console.log(event.target.files[0]);
                                            console.log(event.target.files[0].name);
                                            setSelectedImage(event.target.files[0].name);
                                        }}
                                    />
                                </div>

                                <div className="nodemodal_input_wrapper">
                                    <div className="nodemodal_input_name">Video Link</div>
                                    <div className="nodemodal_input_div"><input type="text" placeholder='Video Link' /> </div>
                                </div>

                                <div className="nodemodal_text_area_wrapper">
                                    <div className="nodemodal_input_name">Video Link</div>
                                    <div className="nodemodal_input_div">
                                        <textarea></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="nodemodal_bottom_button_wrapper">
                                <button className="nodemodal_cancel_btn" onClick={() => setModalOpen(false)}>Cancel</button>
                                <button className="nodemodal_save_btn">Save</button>
                            </div>

                        </div>
                    </div>
                    <div className="nodemodal_modal_background_Shadow">

                    </div>
                </>
            }
        </div>
    )
}

export default Notesmodal;
