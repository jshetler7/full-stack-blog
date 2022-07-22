import * as React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { apiService } from '../services/apiService';


interface RegisterProps {}

const Register = (props: RegisterProps) => {

    const nav = useNavigate();
	const location = useLocation();
    const [values, setValues] = useState<{ [key: string]: string }>({});
	const [error, setError] = useState<string>((location.state as string) || '');

    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValues(pre => ({ ...pre, [e.target.name]: e.target.value }));
	};

    const handleRegistration = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		apiService('/auth/register', 'POST', values)
		.then(register => {
			localStorage.setItem('token', register.token);
			nav('/collection');
		})
		.catch(e => setError(e.message));
    };

    return(
        <main className="container">
			<section className="row justify-content-center">
				<div className="col-md-6">
					<form className="px-3 py-4 mt-5 border rounded shadow">
                        <label className='text-light'>Full Name</label>
						<input
							type="name"
							name="name"
							autoComplete="current-password"
							className="form-control"
							value={values.name || ''}
							onChange={handleChanges}
						/>
                        <label className='text-light'>Username</label>
						<input
							type="username"
							name="username"
							autoComplete="current-password"
							className="form-control"
							value={values.username || ''}
							onChange={handleChanges}
						/>
						<label className='text-light'>Email</label>
						<input
							type="email"
							name="email"
							autoComplete="current-email"
							className="form-control"
							value={values.email || ''}
							onChange={handleChanges}
						/>
						<label className='text-light'>Password</label>
						<input
							type="password"
							name="password"
							autoComplete="current-password"
							className="form-control"
							value={values.password || ''}
							onChange={handleChanges}
						/>
						<div className="mt-3 d-flex justify-content-end">
							<button className="btn btn-primary" onClick={handleRegistration}>
								Register
							</button>
						</div>
					</form>
				</div>
			</section>
			<section className="row justify-content-center">
				<div className="col-md-6">
					{error && (
						<div className="alert alert-danger" role="alert">
							{error}
						</div>
					)}
				</div>
			</section>
		</main>
    )
}

export default Register;