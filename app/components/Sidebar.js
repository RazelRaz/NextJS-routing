import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <div>
            <h1>Side Bar</h1>
            <ul>
                <li><Link href={"/about"}>About</Link></li>
                <li><Link href={"/blog"}>Blog</Link></li>
                
            </ul>
        </div>
    );
};

export default Sidebar;