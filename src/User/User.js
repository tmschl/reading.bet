import { useState, useEffect } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { Profile } from '../Profile/Profile';

export function User () {
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
		console.log(e, e.target[0].value, e.target[1].value);
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
				{/* <Profile userInfo={ user } /> */}
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
				<button type="submit">Submit</button>
			</form>
			{ user.isLoggedIn ? <SearchBar userInfo={ user } /> : "" }
		</div>
	);
}