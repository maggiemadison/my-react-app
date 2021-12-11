import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const FormsNavBar = () => (
    <div>
    <ul>
        <li>
            <Link to="forms/controlled-form">Controlled Form</Link>
        </li>
        <li>
            <Link to="forms/uncontrolled-form">Uncontrolled Form</Link>
        </li>
    </ul>
    <Outlet />
    </div>
)