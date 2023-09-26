import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { publicRoutes } from '~/routes';
import { DefaultLayout, NoIsSidebarLayout } from '~/layouts';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <Router>
            <div className="App">
                <ToastContainer />
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout === 'NoIsSidebarLayout') {
                            Layout = NoIsSidebarLayout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
