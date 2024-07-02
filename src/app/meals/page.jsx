
import Meals from '@/components/Meals';
import React from 'react';

const MealsPage = () => {
    
    return (
        <div className='p-12'>
            <h1 className='text-3xl text-red-500'>Choose Your Meals</h1>
            <p>Choose meals of you choice by searching........</p>
            <Meals/>
        </div>
    );
};

export default MealsPage;