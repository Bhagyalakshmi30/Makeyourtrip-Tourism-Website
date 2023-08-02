import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import './ToastStyles.css';

import { Modal, Button, Form, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';



function Register() {






    const navigate = useNavigate();
	const [userName, namechange] = useState("");
	const [password, passwordchange] = useState("");
	const [emailId, emailchange] = useState("");
	const [phoneNumber, phonechange] = useState("");
	const [country, countrychange] = useState("India");
    const [agency, agencychange] = useState("");
	const [gender, genderchange] = useState("");
	const [role, rolechange] = useState("");
	const [status, statuschange] = useState("");




    const IsValidate = () => {
		let isproceed = true;
		let errormessage = 'Please enter the value in ';
		if (userName === null || userName === '') {
			isproceed = false;
			errormessage += ' Fullname';
		}
		if (role === null || role === '') {
			isproceed = false;
			errormessage += ' Role';
		}
		if (password === null || password === '') {
			isproceed = false;
			errormessage += ' Password';
		}
		if (emailId === null || emailId === '') {
			isproceed = false;
			errormessage += ' Email';
		}

		if (!isproceed) {
			toast.warning(errormessage)
		} else {
			if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailId)) {

			} else {
				isproceed = false;
				toast.warning('Please enter the valid email')
			}
		}
		return isproceed;
	
    }

    const isAgent = role.toLowerCase() === 'agent';
    const handlesubmit = (e) => {
		e.preventDefault();
		let regobj = { userName, password, emailId, phoneNumber, country, agency: isAgent ? agency : ''
            ,gender, role, status: isAgent ? false : true};
		console.log(JSON.stringify(regobj));
		if (IsValidate()) {
			localStorage.setItem('name', userName);
			localStorage.setItem('email', emailId);
			fetch('https://localhost:7224/api/Users', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(regobj),
			})
				.then((res) => {
					toast.success('Registered Successfully', {
						toastStyle: {
							background: 'green',
						},
						bodyStyle: {
							fontSize: '20px',
						},
						progressStyle: {
							background: 'white',
						},
					});

					// Check the user's role and navigate accordingly
					if (role === 'traveller') {
						navigate('/Otpverify');
					} else if (role === 'agent') {
						navigate('/Approval');
					}
				})
				.catch((err) => {
					toast.error('Failed: ' + err.message, {
						toastStyle: {
							background: 'red',
						},
						bodyStyle: {
							fontSize: '16px',
						},
						progressStyle: {
							background: 'white',
						},
					});
				});
		}
	};
	










  

    const handleGenderChange = (event) => {
        genderchange(event.target.value);
    };




    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can add your form submission logic
        console.log(formData);
    };

    const [showModal, setShowModal] = useState(true);

    const handleClose = () => {
        setShowModal(false);
    };
    const [selectedRole, setSelectedRole] = useState('');
    const [agentCode, setAgentCode] = useState('');

    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
    };

    const handleAgentCodeChange = (event) => {
        setAgentCode(event.target.value);
    };



    return (
        <div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2>Register</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={handlesubmit} className='form'>
					<h3>New Account?</h3>
					<div className="col">
						<div className="form-group">
							<label>Full Name <span className="errmsg">*</span></label>
							<input value={userName} onChange={e => namechange(e.target.value)} className="form-control"></input>
						</div>
					</div>

					<div className="col">
						<div className="form-group">
							<label>Password <span className="errmsg">*</span></label>
							<input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
						</div>
					</div>
					<div className="col">
						<div className="form-group">
							<label>Email <span className="errmsg">*</span></label>
							<input value={emailId} onChange={e => emailchange(e.target.value)} className="form-control"></input>
						</div>
					</div>
					<div className="col">
						<div className="form-group">
							<label>Phone <span className="errmsg"></span></label>
							<input value={phoneNumber} onChange={e => phonechange(e.target.value)} className="form-control"></input>
						</div>
					</div>
					<div className="col">
						<div className="form-group">
							<label>Country <span className="errmsg">*</span></label>
							<input value={country} onChange={e => countrychange(e.target.value)} className="form-control"></input>
						</div>
					</div>
					

					<div className="col">
						<div className="form-group">
							<label>Role <span className="errmsg">*</span></label>
							<select value={role} onChange={e => {
								rolechange(e.target.value);
								
							}} className="form-control">
								<option value="">Select Role</option>
                                <option value="traveller">Traveller</option>
                                
								<option value="agent">Travel Agent</option>
								
							</select>
						</div>
					</div>
					{role === 'agent' && (
						<div className="col-lg-12">
							<div className="form-group">
								<label>AGENCY Name <span className="errmsg">*</span></label>
								<input value={agency} onChange={e => agencychange(e.target.value)} className="form-control"></input>
							</div>
						</div>
					)}
					<div className="col">
						<div className="form-group ">
							<label>Gender <span className="errmsg">*</span></label>
							<br></br>
							<input
								type="radio"
								checked={gender === 'male'}
								onChange={e => genderchange(e.target.value)}
								name="gender"
								value="male"
								className="app-check"
							/>
							<label>Male</label>&nbsp;
							<input
								type="radio"
								checked={gender === 'female'}
								onChange={e => genderchange(e.target.value)}
								name="gender"
								value="female"
								className="app-check"
							/>
							<label>Female</label>
						</div>
					</div>
					<div className="">
						<button type="submit" className="button ">Register</button>
						Already have an account? <Link to={'/login'} className="">Login</Link>
					</div>

				</form>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>


        </div>




    );


}

export default Register;