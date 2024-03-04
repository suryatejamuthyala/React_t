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
   

                 <h2>Register Form</h2>
  <div class="input-container">
    <i class="fa fa-user icon"></i>
    <input class="input-field" type="text" placeholder="Username" name="usrnm" onChange={(e) => setName(e.target.value)}/>
  </div>

  <div class="input-container">
    <i class="fa fa-envelope icon"></i>
    <input class="input-field" type="text" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)}/>
  </div>

  <div class="input-container">
    <i class="fa fa-key icon"></i>
                    <input class="input-field" type="password" placeholder="Password" name="psw" onChange={(e) => setPassword(e.target.value)}/>
                        
  </div>

  <button type="submit" class="btn">Register</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Go Back</button></center> </div>
        </>

    );
};

export default Register;
