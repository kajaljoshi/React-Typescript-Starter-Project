import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';

const AppRoutes = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" Component={HomePage} />
        </Routes>
    );
};

export default AppRoutes;
