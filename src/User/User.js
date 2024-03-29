import { useState, useEffect } from 'react';
import { SearchBar } from '../SearchBar/SearchBar'

export function User (props) {

	const [user, setUserState] = useState({
		username: "",
		password: "",
		isLoggedIn: false,
		readingNow: [],
		setReadingNow: function (bookTitle) {
			this.readingNow.push(bookTitle);
		}
	});


	const handleSubmit = (e) => {
		e.preventDefault();

		setUserState({
			...user,
			username: `${e.target[0].value}`, 
  		password: `${e.target[1].value}`,
			isLoggedIn: true 
		})
	
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
				<button type="submit" >Submit</button>
			</form>
			{ user.isLoggedIn ? <SearchBar />  : ''}
		</div>
	);
}