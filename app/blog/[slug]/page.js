import React from 'react';

const singleBlogpage = ({params}) => {
    console.log(params.slug)
    return (
        <div>
            <h1>single Blog page</h1>
        </div>
    );
};

export default singleBlogpage;