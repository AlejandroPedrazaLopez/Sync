import React from 'react';
import { Routes, Route } from 'react-router';
import Screen1 from '../pages/screen1';import Screen2 from '../pages/screen2';import Screen3 from '../pages/screen3';

function RoutingApp() {
    return (
        <Routes>
            <Route path="/Screen1" element={<Screen1 />} />
<Route path="/Screen2" element={<Screen2 />} />
<Route path="/Screen3" element={<Screen3 />} />

        </Routes>
    );

}

export default RoutingApp;