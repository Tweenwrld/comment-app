// pages/_app.js

import '../styles/globals.css';
import React from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    return (
        <div className="app">
            <nav>
                <ul>
                    <li>
                        <button onClick={() => router.push('/')}>
                            Home
                        </button>
                    </li>
                    <li>
                        <button onClick={() => router.push('/create')}>
                            Create Post
                        </button>
                    </li>
                </ul>
            </nav>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;