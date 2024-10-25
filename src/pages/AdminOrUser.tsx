import { Link } from "react-router-dom";

function AdminOrUser() {
    return (
        <div className="container mx-auto pt-5 pb-5 border-separate border-spacing-0 border-none">
            <h1 className="text-2xl font-bold mb-4 text-white">Choose The Role</h1>

            <div>
                <Link to="/"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5">Admin</button></Link>
            </div>

            <div>
               <Link to="/user"> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">User</button></Link>
            </div>
        </div>
    );
}

export default AdminOrUser;