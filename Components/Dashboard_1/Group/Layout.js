import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
    return (
        <div>
            <Link href="/dashboard_1/hello">
                <a>Click</a>
            </Link>
            {children}
        </div>
    );
};

export default Layout;
