import { useContext } from 'react';
import { AuthContext } from './providers/AuthProvider';
import { AuthSupplier } from './Supplier/Supplier';

const Home = () => {
    const authInfo = useContext(AuthContext)
    const anaJinish = useContext(AuthSupplier)
    return (
        <div>
            <h1>I am Home</h1>
           {
               authInfo.name
           }
           <h2>Su</h2>
            {
                anaJinish.name
            }
        </div>
    );
};

export default Home;