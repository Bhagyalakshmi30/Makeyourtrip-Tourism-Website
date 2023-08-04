import React, { useState } from 'react';
import { Modal, InputLabel, Button, TextField, FormControlLabel, Radio, RadioGroup, FormControl, FormLabel, Container, Paper, Typography, MenuItem, Select } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const StyledContainer = styled(Container)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	minHeight: '100vh',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(4),
	width: 500,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	maxHeight: '90vh', // Adjust this value as needed
	overflowY: 'auto', // Enable vertical scrolling
}));

const StyledForm = styled('form')({
	width: '100%',
	marginTop: 16,
});

const StyledButton = styled(Button)(({ theme }) => ({
	marginTop: theme.spacing(3),
}));


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
	const handleSubmit = (e) => {
		console.log("handle submit function")
		e.preventDefault();
		let regobj = {
			userName, password, emailId, phoneNumber, country, agency: isAgent ? agency : ''
			, gender, role, status: isAgent ? false : true
		};
		console.log(JSON.stringify(regobj));
		if (IsValidate()) {
			localStorage.setItem('name', userName);
			localStorage.setItem('email', emailId);
			fetch('https://localhost:7239/api/Users/register', {
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
						navigate('/service');
					} else if (role === 'agent') {
						navigate('/contact');
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


	const [showModal, setShowModal] = useState(true);

	const handleClose = () => {
		setShowModal(false);
	};
	return (
		<Modal open={showModal} onClose={handleClose}>
			<StyledContainer>
				<StyledPaper>
					<Typography variant="h5" gutterBottom>
						Register
					</Typography>
					<StyledForm onSubmit={handleSubmit}>
						<TextField
							label="Full Name"
							value={userName}
							onChange={(e) => namechange(e.target.value)}
							fullWidth
							margin="normal"
							required
						/>
						<TextField
							label="Password"
							value={password}
							onChange={(e) => passwordchange(e.target.value)}
							type="password"
							fullWidth
							margin="normal"
							required
						/>
						<TextField
							label="Email"
							value={emailId}
							onChange={(e) => emailchange(e.target.value)}
							fullWidth
							margin="normal"
							required
						/>
						<TextField
							label="Phone"
							value={phoneNumber}
							onChange={(e) => phonechange(e.target.value)}
							fullWidth
							margin="normal"
						/>
						<TextField
							label="Country"
							value={country}
							onChange={(e) => countrychange(e.target.value)}
							fullWidth
							margin="normal"
						/>
						<FormControl fullWidth margin="normal">
							<InputLabel>Role</InputLabel>
							<Select
								value={role}
								onChange={(e) => rolechange(e.target.value)}
								required
							>
								<MenuItem value="traveller">Traveller</MenuItem>
								<MenuItem value="agent">Travel Agent</MenuItem>
							</Select>
						</FormControl>
						{role === 'agent' && (
							<TextField
								label="Agency Name"
								value={agency}
								onChange={(e) => agencychange(e.target.value)}
								fullWidth
								margin="normal"
								required
							/>
						)}
						<FormControl component="fieldset" fullWidth margin="normal">
							<FormLabel component="legend">Gender</FormLabel>
							<RadioGroup
								row
								aria-label="gender"
								value={gender}
								onChange={handleGenderChange}
							>
								<FormControlLabel
									value="male"
									control={<Radio />}
									label="Male"
								/>
								<FormControlLabel
									value="female"
									control={<Radio />}
									label="Female"
								/>
							</RadioGroup>
						</FormControl>
						<StyledButton type="submit" variant="contained" color="primary">
							Register
						</StyledButton>
						<Link to="/login">
							<Button>Sign Up</Button>
						</Link>
						Already have an account? <Link to={'/signin'}>Login</Link>
					</StyledForm>
				</StyledPaper>
			</StyledContainer>
		</Modal>
	);

}

export default Register;