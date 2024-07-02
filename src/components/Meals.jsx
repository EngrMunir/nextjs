"use client"

import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [search, setSearch] = useState('a');
    const [error, setError] = useState('');
    const [meals, setMeals] = useState([]);

    const  loadData = async ()=>{
        try {
            const res = await fetch(`https://www.themedb.com/api/json/v1/1/search.php?f=${search}`)
        const data = await res.json();
        setMeals(data.meals)
        } catch (error) {
            console.log(error.message)
        }
        
    }

    const handler =(e)=>{
        console.log(e.target.value)
        setSearch(e.target.value)
    }
    useEffect(()=>{
        loadData();
    },[search])

    return (
        <div className='mt-12'>
                <input onChange={handler} className='p-4 outline-none border-2 text-slate-900' type="text" placeholder='search meals......' />
                <button onClick={()=> loadData()} className='bg-red-400 p-4'>Search</button>
                <div className='mt-12 grid grid-cols-3 gap-12'>
                    { meals?.length > 0 &&
                        meals?.map((meal)=>(
                            <div key={meal.idMeal} className='border-2 p-4'>
                                <h6>{meal.strMeal}</h6>
                                <p>{meal.strInstructions}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
    );
};

export default Meals;