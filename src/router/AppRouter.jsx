import { Route, Routes } from 'react-router-dom';
import { AuthRouts } from '../auth/routes/AuthRouts';
import JournalRoutes from '../journal/routes/JournalRoutes';

export function AppRouter() {
    return (
        <Routes>
            <Route path='/auth/*' element={<AuthRouts />} />
            <Route path='/*' element={<JournalRoutes />} />
        </Routes>
    );
}
