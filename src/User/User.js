import { useState, useEffect } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { Profile } from '../Profile/Profile';
import { Link, useNavigate } from "react-router-dom";

export function User (props) {
	const navigate = useNavigate();

	const [user, setUserState] = useState({
		username: "",
		password: "",
		isLoggedIn: false,
		readingNow: [],
		setReadingNow: function (bookTitle) {
			this.readingNow.push(bookTitle);
		},
		setLoggedIn: props.setLoggedIn
	});


	const handleSubmit = (e) => {
		e.preventDefault();

		setUserState({
			...user,
			username: `${e.target[0].value}`, 
  		password: `${e.target[1].value}`,
			isLoggedIn: true 
		})
	
			navigate('/search')
	}

	return (
		<div className="user">

			<header>
			<div>
				hello {user.username} 
			</div>
			</header>
			<form onSubmit={handleSubmit} hidden={user.isLoggedIn}>
				<label htmlFor="login">
					Login
					<input
							id="username"
							value={user.username}
							placeholder="username"
							onChange={(e) => setUserState({
								...user, 
								username: `${e.target.value}`
							})}

					/>
				</label>
				<label htmlFor="login">
					Password 
					<input
							id="password"
							value={user.password}
							placeholder="password"
							onChange={(e) => setUserState({
								...user, 
								password: `${e.target.value}`

							})}
							/>
				</label>
				<button type="submit" onClick={user.setLoggedIn} >Submit</button>
			</form>
			{/* { user.isLoggedIn ?  <Link to="search" /> : "" } */}
		</div>
	);
}