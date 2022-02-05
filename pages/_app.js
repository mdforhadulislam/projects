import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import React from 'react';
import store from '../Redux/store';
import TopNavBar from '../Components/Nav/TopNavBarFile/TopNavBar';
import SideNavBar from '../Components/Nav/SideNavBarFile/SideNavBar';
import { Provider } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import { createWrapper } from 'next-redux-wrapper';
import AcademicActivities from '../Components/Dashboard_1/Group/AcademicActivities/AcademicActivities';
import RoutineNavbar from '../Components/Dashboard_1/Group/RoutineNavbar';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
    const route = useRouter();
    // console.log(route.pathname === '/dashboard_1' ? 'true' : 'false');
    const routeArray = route.pathname.split('/');
    React.useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, [])

    return (
        <Provider store={store}>
            {routeArray[1] === 'dashboard_1' && (
                <React.Fragment>
                    <TopNavBar />
                    <SideNavBar />
                </React.Fragment>
            )}
            {routeArray[3] === 'groupcard' && <AcademicActivities />}
            {routeArray[4] === 'routine' && <RoutineNavbar />}

            <Component {...pageProps} />
        </Provider>
    );
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
