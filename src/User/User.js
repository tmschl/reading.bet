import { useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';

export function User () {
	const [user, setUserState] = useState({
		username: "",
		name: "",
		password: "",
		isLoggedIn: false,
		readingNow: []
	});

	return (
		<div className="user">
			<form>
				<label htmlFor="login">
					Login
					<input
							id="username"
							value={user.username}
							placeholder="email"
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
								password: `${e.target.value}`,
								isLoggedIn: true

							})}
							/>
				</label>
			</form>
			{ user.isLoggedIn ? <SearchBar /> : "" }
		</div>
	);
}