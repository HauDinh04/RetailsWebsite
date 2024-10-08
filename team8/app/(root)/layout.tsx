import React from 'react';

function Layout({children} : { children : React.ReactNode}) {
    return (
        <main className={'relative'}>
            {children}
        </main>
    );
}

export default Layout;
