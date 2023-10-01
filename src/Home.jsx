import { useContext } from 'react';
import { AuthContext } from './providers/AuthProvider';

const Home = () => {
    const authInfo = useContext(AuthContext)
    return (
        <div>
            <h1>I am Home</h1>
           {
               authInfo.name
           }

        </div>
    );
};

export default Home;