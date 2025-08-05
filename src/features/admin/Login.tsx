import '../../styles/Login.css'
import { checkLogin, signInWithGithub, signOut } from '../../store/hooks'
import { useEffect, useState, createContext } from 'react';

function Login(session) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    
    useEffect(() => {
        checkLogin()
    }, []);

    return (
        <>
            <button id="Logout" onClick={() => signOut()}>Logout</button>
            <div className="login_wrap" id="Login">
                <p>Sign in</p>
                <input type="text" placeholder="Username" id="login_id" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" placeholder="Password" id="login_pwd" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className="login_btn" onClick={(e) => {
                    if(username === 'test' && password === '1234') {
                        e.preventDefault();
                        signInWithGithub();
                    } else {
                        console.log('username or password error');
                    }
                    }}>
                    Login
                </button>
            </div>
        </>
    );
}

export default Login;