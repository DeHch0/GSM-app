import React, { useState } from 'react';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleChange = ({ target }) => {
        switch (target.id) {
            case 'username': { setUsername(target.value); break; }
            case 'password': { setPassword(target.value); break; }
            case 'email': { setEmail(target.value); break; }
            default: { return (''); }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            username,
            password,
            email
        }

        console.log(data);
    }



    return (
        <form onSubmit={handleSubmit}>

            <div className="labe">

                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name='username'
                    id='username'
                    value={username}
                    onChange={handleChange}
                />
            </div>


            <div className="label">

                <label htmlFor="password">Password:</label>
                <input
                    type="text"
                    name='password'
                    id='password'
                    value={password}
                    onChange={handleChange}
                />
            </div>


            <div className="label">

                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name='email'
                    id='email'
                    value={email}
                    onChange={handleChange}
                />
            </div>

            
            <button type='submit'>Login</button>

        </form>
    )
}

export default Login;