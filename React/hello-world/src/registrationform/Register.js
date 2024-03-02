import React, {useState} from 'react';
import './register.css';

const Register = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (<><div className='form-container'>
           <center><form onSubmit={handleSubmit} style={{position:'center',top:'50%'}} >
                <label>Full name</label>
                <input value={name} onChange={(e) => setName(e.target.value)}/>
                <br></br>
                <label htmlFor="email">email</label>
                <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <br></br>
                <label htmlFor="password">password</label>
                <input type='password' id='password' name='password' value={password}

                       onChange={(e) => setPassword(e.target.value)}/>
                       <br></br>
                <button type='submit'>Submit</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Go Back</button></center> </div>
        </>

    );
};

export default Register;
