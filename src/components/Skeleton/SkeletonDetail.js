import React from 'react';
import ContentLoader from 'react-content-loader';
import { useSelector } from 'react-redux';

const SkeletonDetail =() =>{
    const userDevice = useSelector(state=>state.device);
    if(userDevice === 'mobile'){
        return (
            <ContentLoader  height={500}>
                <circle cx="150" cy="100" r="100" />
                <rect x="0" y="215" rx="4" ry="4" width="300" height="40" />
                <rect x="0" y="275" rx="4" ry="4" width="300" height="25" />
                <rect x="0" y="305" rx="4" ry="4" width="300" height="10" />
                <rect x="0" y="325" rx="4" ry="4" width="300" height="10" />
                <rect x="0" y="340" rx="4" ry="4" width="300" height="10" />
            </ContentLoader> 
        )
    }else{
        return (
            <ContentLoader width={850}  height={500}>
                <circle cx="425" cy="100" r="100" />
                <rect x="0" y="215" rx="4" ry="4" width="850" height="450" />
            </ContentLoader> 
        )
    }
}

export default SkeletonDetail