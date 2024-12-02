import { IoLocationOutline } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import '../Css/Contact.css';

import { useState } from "react";

const Contact = () =>{

    const [stdName, setStdName] = useState("");
    const [stdEmail, setStdEmail] = useState("");
    const [stdPName, setStdPName] = useState("");
    const [stdMNumb, setStdMNum] = useState("");
    const[error, setError] = useState({});
    const[submittedData, setSubmittedData] = useState(null);

    const validationForm = () => {
        let isValid = true;
        const newErr = {};

        if(!stdName.trim()){
            newErr.stdName = "Student Name must required";
            isValid = false;
        }

        if(!stdEmail.trim()){
            newErr.stdEmail = " Student Email must required";
            isValid = false;
        }

        if(!stdMNumb.trim()){
            newErr.stdMNumb = " Student Phone no. must required";
            isValid = false;
        }
        else if(stdMNumb.length > 11){
            newErr.stdMNumb = "Phone no. must be 10 digits";
            isValid = false;
        }

        setError(newErr);
        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(validationForm()){
            const submittedData = {stdName, stdEmail, stdMNumb};
            setSubmittedData(submittedData);
            console.log("Form Submitted:", submittedData);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6" id="Enquiry">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6" id="Enquiry">
                            <div className="fafaicon">
                                <IoLocationOutline />
                            </div>
                            <h3 className="Address">Address way</h3>
                            <p className="Address">Jindal Public School, At/Po - Gangapada, Adjacent to NH 16,Dist - Khurda, Bhubaneswar - 752054</p>
                            <div className="fafaicon">
                                <MdAttachEmail />
                            </div>
                            <h3 className="Address">Email</h3>
                            <p className="Address">Amanprasad549@gmail.com</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6" id="Enquiry">
                            <div className="fafaicon">
                                 <IoIosContacts />
                            </div>
                            <h3 className="Address">Contact Us</h3>
                            <p className="Address">7978228274,9090371097</p>
                           
                        </div>
                    </div>

                </div>

                {/* 2nd div */}


                <div className="col-lg-6 col-md-6 col-sm-12" id="Enquiry">
                    <h3 className="Fillform">
                        Fill the form below so we can get to know you and your needs better.
                    </h3>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">ENQUIRY NOW</h5>
                            <form className="" onSubmit={handleSubmit}>
                                <label>Student Name</label>
                                <input
                                    type= "text"
                                    className="form-control" 
                                    id="inputText"
                                    placeholder="Student Name..."
                                    value={stdName}
                                    onChange={(e)=>setStdName(e.target.value)}
                                />
                                {error.stdName && <span className="text-danger">{error.stdName}</span>}
                                <h6>Email</h6>
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="inputText"
                                    placeholder="Email..."
                                    value={stdEmail}
                                    onChange={(e)=>setStdEmail(e.target.value)}
                                />
                                {error.stdEmail && <span className="text-danger">{error.stdEmail}</span>}
                                <label>Parent's Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputText"
                                    placeholder="Parents Name..."
                                    value={stdPName}
                                    onChange={(e)=>setStdPName(e.target.value)}
                                />
                                <h6>Mobile number</h6>
                                <input 
                                    type="number"
                                    className="form-control"
                                    id="inputText"
                                    placeholder="Mobile Number..."
                                    value={stdMNumb}
                                    onChange={(e)=>setStdMNum(e.target.value)}
                                />
                                {error.stdMNumb && <span className="text-danger">{error.stdMNumb}</span>}
                                <button type="submit" className="btn btn-primary ms-3 mt-2">Submit</button>
                            </form>
                        </div>
                        {submittedData && (
                    <div>
                        <h3>Submitted Data:</h3>
                        <p>Name : {submittedData.stdName}</p>
                        <p>Email : {submittedData.stdEmail}</p>
                        <p>Phone no. : {submittedData.stdMNumb}</p>
                    </div>
                )}
                    </div>
                </div>
            </div>
        </div>
    )
} 
 
export default Contact ;