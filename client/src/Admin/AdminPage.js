import React from 'react';

import AdminHeader from "./AdminHeader";

import "./Admin.css"

function AdminPage({children}) {
    return (
        <div>
            <AdminHeader/>
            {children}
        </div>
    );
}

export default AdminPage;