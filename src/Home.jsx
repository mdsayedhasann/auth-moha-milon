import { useContext } from 'react';
import { AuthContext } from './providers/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h1>I am Home</h1>
           {
               user?.email
           }

        </div>
    );
};

export default Home;