import { HashRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loading from '../pages/Loading/Loading';

export default function Router() {
    const Home = lazy(() => import('../pages/Home/Home'));

    return (
        <HashRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route element={<Loading />} path="/loading" />
                    <Route element={<Home />} path="/" />
                </Routes>
            </Suspense>
        </HashRouter>
    );
}
