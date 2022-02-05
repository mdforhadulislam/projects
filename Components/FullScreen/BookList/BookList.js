import React, { useState } from 'react'; import { faEdit, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const BookList = () => {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
    }
  };

  const [create, setCreate] = useState("");
  const [createBookList, setCreateBookList] = useState(true);
  const [formValues, setFormValues] = useState([{ bookName: "", code: "", writerName: "", other: "" }]);
  const [submitValues, setSubmitValues] = useState([{ bookName: "N/A" || "", code: "N/A", writerName: "N/A", other: "N/A" }]);
  const [form, setForm] = useState(true);
  const [addData, setAddData] = useState(true);
  const [editDelete, setEditDelete] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const deleteYes = () => {
    setCreateBookList(true);
    setCreate("");
    setAddData(true);
    setFormValues([{ bookName: "", code: "", writerName: "", other: "" }]);
    closeModal();
    setForm(true);
  }

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  }

  let addFormFields = () => {
    setFormValues([...formValues, { bookName: "", code: "", writerName: "", other: "" }])
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    
    setFormValues(formValues);
    setSubmitValues(formValues);
  }

  const submit = () => {
    console.log(formValues);
    setForm(false);
    setFormValues(formValues);
    setSubmitValues(formValues);

  }

  return (
    <>
      {createBookList &&
        <div id="created-book-list" className="created-book-list text-center" onClick={() => { setCreateBookList(false) }}>
          <i className=""><FontAwesomeIcon icon={faPlus} /></i>
          <h3>Create A Book List</h3>
        </div>}


          {/* <!-- user input action here --> */}
      {(!addData) && <div id="booklist-edit" className="user-edit-input ">
        <div className="d-flex justify-content-end">
          <i id="edit-input-field" className="" title="Edit Input" onClick={() => { setEditDelete(true) }} >< FontAwesomeIcon icon={faEdit} /></i>
          <i id="delete-input-field" className="" title="Remove Row" onClick={openModal} >< FontAwesomeIcon icon={faTrashAlt} /></i>
        </div>
      </div>}

      {/* <!-- booklist table start --> */}
      {/* <!-- booklist table start --> */}
      {/* <!-- booklist table start --> */}
      <form onSubmit={handleSubmit}>
        {!createBookList &&
          <div id="booklist-table" className="booklist-table">
            <div className="container">
              <div className="row bg-danger text-white text-center booklist-row">
                <div className="col-lg-3 booklist-table-head ">
                  <h5 className="left-border text-capitalize">Book Name</h5>
                </div>
                <div className="col-lg-3 booklist-table-head ">
                  <h5 className="left-border text-capitalize">Code</h5>
                </div>
                <div className="col-lg-3 booklist-table-head ">
                  <h5 className="left-border text-capitalize">Writer Name</h5>
                </div>
                <div className="col-lg-3 booklist-table-head ">
                  <h5 className="text-capitalize">Other</h5>
                </div>
              </div>

              <div id="main-table">

                {form &&
                  formValues.map((element, index) =>
                    <>
                      <div id="first-table-row" className="row user-input-box">
                        <div className="col-lg-3 px-0">
                          <div className="left-border">
                            <input type="text" name="bookName" className="user-input-text" onChange={e => handleChange(index, e)} />
                          </div>
                        </div>
                        <div className="col-lg-3 px-0">
                          <div className="left-border">
                            <input type="text" name="code" className="user-input-text" onChange={e => handleChange(index, e)} />
                          </div>
                        </div>
                        <div className="col-lg-3 px-0">
                          <div className="left-border">
                            <input type="text" name="writerName" className="user-input-text" onChange={e => handleChange(index, e)} />
                          </div>
                        </div>
                        <div className="col-lg-3 px-0">
                          <div>
                            <input type="text" name="other" className="user-input-text" onChange={e => handleChange(index, e)} />
                          </div>
                        </div>
                      </div>
                    </>)}


                    {!form &&
                  submitValues.map((element, index) =>
                    <>
                      <div id="first-table-row" className="row user-input-box">
                        <div className="col-lg-3 px-0">
                          <div className="left-border">
                            <input type="text" name="bookName" className="user-input-text" value={element.bookName? element.bookName : "N/A"} onChange={e => handleChange(index, e)} />
                          </div>
                        </div>
                        <div className="col-lg-3 px-0">
                          <div className="left-border">
                            <input type="text" name="code" className="user-input-text" value={element.code? element.code : "N/A"} onChange={e => handleChange(index, e)}/>
                          </div>
                        </div>
                        <div className="col-lg-3 px-0">
                          <div className="left-border">
                            <input type="text" name="writerName" className="user-input-text" value={element.writerName? element.writerName : "N/A"} onChange={e => handleChange(index, e)} />
                          </div>
                        </div>
                        <div className="col-lg-3 px-0">
                          <div>
                            <input type="text" name="other" className="user-input-text" value={element.other? element.other : "N/A"} onChange={e => handleChange(index, e)} />
                          </div>
                        </div>
                      </div>
                    </>)}
              </div>

            </div>
            <div className="addBtn-group">
              {addData && <button id="addMore-bookList" className="addMore-btn px-0" type="button" onClick={addFormFields}><img src="../assets/images/svg/add more plus.svg"
                alt="" />Add More</button>}

              {addData && <div id="addServerbuttonInner">
                <div className="d-flex justify-content-end btn-bootom">
                  <button id="postDataBtn" className="cmnBtn mr-3 submit" onClick={() => { submit(); setAddData(false) }} type="submit">Add</button>
                  <button className="cmnBtn" type="button" onClick={deleteYes}>Cancel</button>
                </div>
              </div>}

              {editDelete && <div id="tableButtonbottom">
                <div className="d-flex justify-content-end btn-bootom">
                  <button id="saveDataBtn" className="cmnBtn mr-3" onClick={() => { submit(); setEditDelete(false) }}>Save</button>
                  <button id="cancleEditInput" className="cmnBtn" onClick={() => { setEditDelete(false) }}>Cancel</button>
                </div>
              </div>}
            </div>
          </div>}
      </form>
      {/* <!-- booklist table end -->
        <!-- booklist table end -->
        <!-- booklist table end -->

          {/* <!-- delete >> yes or no pop up text  start -->
        <!-- delete >> yes or no pop up text  start -->
        <!-- delete >> yes or no pop up text  start --> */}

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      // contentLabel="Example Modal"
      >
        <div className="popup-text" id="delete-booklist-popup">
          <h5 className="text-capitalize">Do You Want To Delete This Book List?</h5>
          <div className="d-flex justify-content-center btn-bootom">
            <button id="confirmDeleteBtn" className="cmnBtn mr-4 border-0" onClick={deleteYes}>Yes</button>
            <button id="denyBtn" className="cmnBtn" onClick={closeModal}>No</button>
          </div>
        </div>
      </Modal>

      {/* <!-- delete >> yes or no pop up text  end -->
        <!-- delete >> yes or no pop up text  end -->
        <!-- delete >> yes or no pop up text  end --> */}

    </>
  );
};

export default BookList;
