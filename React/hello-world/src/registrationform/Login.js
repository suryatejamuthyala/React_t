import React, {useState} from 'react';

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (<>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="password">password</label>
                <input type='password' id='password' name='password' value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit'>Login</button>
            </form>
            <button onClick={() => props.onFormSwitch('register')}>Registration Link</button>
        </>

    );
};

export default Login;
