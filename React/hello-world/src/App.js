import React, {useState} from 'react';
import Login from './registrationform/Login';
import login from './registrationform/Login';
import Register from './registrationform/Register';

const HelloComponent = () => {
    const [currentForm, setCurrentForm] = useState('login')
    const form = (formName) => {
        setCurrentForm(formName)
    }
    return (<div className='App'>
            {currentForm === login ? <Login onFormSwitch={form}/> : <Register onFormSwitch={form}/>}
        </div>

    );
};

export default HelloComponent;
