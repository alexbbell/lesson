import React  from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

export const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();


    const {signin} = useAuth();
    const fromPage = (location.state) ? location.state.from.pathname : '/';
    console.log(fromPage);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;
        console.log('user', user);

        signin(user, () => navigate('/blog/new', {replace: true}));
    }
    //const fromPage = 'prev page';

    return (
        <div>
            <h1>login page</h1>
            {fromPage}
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name="username" />
                    <button type="submit">Send</button>
                </label>
            </form>
        </div>
    )
}
