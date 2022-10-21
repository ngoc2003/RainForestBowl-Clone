import React from 'react';
import Header from './common/Header';
import {Outlet} from 'react-router-dom'
import { withErrorBoundary } from "react-error-boundary";
import Error from '../components/Error';
const LayoutDefault = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default withErrorBoundary(LayoutDefault, {FallbackComponent: Error});