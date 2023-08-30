//////////////////// Busqueda por frontend //////////////////// 

import React, { useEffect, useState } from 'react'
import CityCard from '../components/CityCard';
import { useDispatch, useSelector } from 'react-redux';
import { getCities } from '../redux/actions/citiesActions';

const Cities = () => {
  const dispatch = useDispatch()
  const { loading, cities } = useSelector(store => store.citiesReducer)

  useEffect(() => {
    dispatch(getCities())
  }, []);


  if (loading) {
    return (<div className='flex-grow'>
    <div className='w-[80vw] flex flex-col flex-wrap justify-center items-center p-2'>
      <input type="text" id="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..." onChange={(e)=> {dispatch(getCities(e.target.value))}}/>
    </div>
      <h1>Loading</h1>
      </div>)
  }

  return (
    <div className='flex-grow'>
      <div className='w-[80vw] flex flex-col flex-wrap justify-center items-center p-2'>
        <input type="text" id="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..." onChange={(e)=> {dispatch(getCities(e.target.value))}}/>
      </div>
      <div className='flex flex-row flex-wrap justify-center items-center'>
        {
          cities.length > 0 ? cities.map((eachCity, index) => {
            return (
              <CityCard city={eachCity} key={index} />
            )
          }) : <div>Not found</div>
        }
      </div>
    </div>
  )
}

export default Cities