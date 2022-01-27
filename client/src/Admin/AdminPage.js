import React from 'react';
import "./Admin.css"
import AdminHeader from "./AdminHeader";

function AdminPage({children}) {
    return (
        <div>
            <AdminHeader/>
            {children}
        </div>
    );
}

export default AdminPage;