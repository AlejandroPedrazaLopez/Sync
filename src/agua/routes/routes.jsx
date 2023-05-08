import React from 'react';
import { Routes, Route } from 'react-router';
import Screen1 from '../pages/screen1';

function RoutingApp() {
    return (
        <Routes>
            <Route path="/Screen1" element={<Screen1 />} />

        </Routes>
    );

}

export default RoutingApp;