import Navigation from "../components/Header/Navigation";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Admin/AdminSidebar";

import SubmissionList from "../components/Admin/SubmissionList";


const AdminUserPage = ({ setAuth, isAuthenticated }) => {

    return (
        <>
            <Navigation setAuth={setAuth} isAuthenticated={isAuthenticated} />
            <div className="page-container">
                <Sidebar activePage={"submission"}/>
                <div className="container-fluid">
                    <SubmissionList />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default AdminUserPage