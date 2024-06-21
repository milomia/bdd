'use strict'
import { useState} from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

const LoginForm = (props) => {
    const router = useRouter()

    const [enteredName, setEnteredName] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    

    const [isLoginValid, setLoginValid] = useState(false);
    const [isUsernameValid, setUsernameValid] = useState(false);
    const [isPasswordValid, setPasswordValid] = useState(false);
    const [isFormSubmitted, setFormSubmitted] = useState(false);

    const isValidPassword = enteredPassword.trim() !=='' &&
        enteredPassword.length >= 6;

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);

    }
    const passwordInputChangeHandler = event => {
        setEnteredPassword(event.target.value);

    }
    const formSubmissionHandler = event => {

        event.preventDefault();

        setFormSubmitted(true);
        if(enteredName.trim() !== '') {
            setUsernameValid(true);
        }
        else {
            setUsernameValid(false);
            return;
        }
        if(enteredPassword.trim() !== '') {
            setPasswordValid(true);
        }
        else {
            setPasswordValid(false);
            return;
        }
        if(isValidPassword) {
            setLoginValid(true);
            router.push({
                pathname: '/account',
                query: {
                    name: enteredName
                }
            },'/account')
        }
            
       
    }


    const nameInputClasses = 'form-control'
    const passwordInputClasses = 'form-control'
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Username</label>
                <input value={enteredName}
                       type='text'
                       id='name'
                       onChange={nameInputChangeHandler}
                       
                />
                {isFormSubmitted && !isUsernameValid && <p className="error-text">Name must not be empty</p>}
            </div>
            <div className={passwordInputClasses}>
                <label htmlFor='name'>Password</label>
                <input value={enteredPassword}
                       type='text'
                       id='password'
                       onChange={passwordInputChangeHandler}
                      
                />
                {isFormSubmitted && !isPasswordValid && <p className="error-text">Password must not be empty</p>}
                
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
            <div className="form-actions">
                <button>
                    <Link href='/forgot-password'>Forgot Password</Link></button>
            </div>
            {isFormSubmitted && !isLoginValid && <p className="error-text">Invalid username or password</p>}
        </form>
    );
};

export default LoginForm;
