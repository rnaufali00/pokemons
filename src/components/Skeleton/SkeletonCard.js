import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonCard = () =>(
    <ContentLoader height={300}>
        <rect x="0" y="0" rx="5" ry="5" width="150" height="170" />
        <rect x="0" y="175" rx="4" ry="4" width="150" height="60" />
    </ContentLoader> 
)

export default SkeletonCard;