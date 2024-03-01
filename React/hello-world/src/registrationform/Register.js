import React, {useState} from 'react';

const Register = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (<>
            <form onSubmit={handleSubmit}>
                <label>Full name</label>
                <input value={name} onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="email">email</label>
                <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="password">password</label>
                <input type='password' id='password' name='password' value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Go Back</button>
        </>

    );
};

export default Register;
