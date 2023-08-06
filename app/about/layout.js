import Link from 'next/link';
import React from 'react';

const aboutlayout = ({children}) => {
    return (
        <div>
            <div>
                <ul>
                    <li>About</li>
                    <li><Link href={"/about/vision"}>Vision</Link></li>
                </ul>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default aboutlayout;