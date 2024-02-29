// In page.js
import Layout from './layout';
import NavBar from '../components/NavBar';
import {BsFillMoonStarsFill} from 'react-icons/bs';

function Page() {
    return (
        <Layout>
            <div className="font-normal">
              <NavBar />
            </div>
        </Layout>
    );
}

export default Page;
