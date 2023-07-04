import { HashRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loading from '../pages/Loading/Loading';

export default function Router() {
    const Home = lazy(() => import('../pages/Home/Home'));
    const Projects = lazy(() => import('../pages/Projects/Projects'));
    const About = lazy(() => import('../pages/About/About'));

    return (
        <HashRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route element={<Loading />} path="/loading" />
                    <Route element={<Home />} path="/" />
                    <Route element={<Projects />} path="/projects" />
                    <Route element={<About />} path="/about" />
                </Routes>
            </Suspense>
        </HashRouter>
    );
}
