//////////////////// Busqueda por frontend //////////////////// 

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CityCard from '../components/CityCard';

const Cities = () => {
  const [cities, setCities] = useState([])
  const [citiesFiltered, setCitiesFiltered] = useState([])

  useEffect(() => {
    getCitiesData()
  }, []);

  useEffect(() => {
    getFilteredCities()
  }, [cities]);

  const getCitiesData = (e) => {
    axios.get('http://localhost:4000/api/cities').then((response) => {
      if (response.data) {
        setCities(response.data.response);
      }
    });
  }

  const getFilteredCities = (e) => {
    let searchCity = ""
    if (e) {
      searchCity = e.target.value.toUpperCase()
    }
    setCitiesFiltered(cities.filter((city) => city.city.toUpperCase().startsWith(searchCity)))
  }

  return (
    <div className='flex-grow'>
      <div>
        <div>
          <input type="text" id="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..." onChange={getFilteredCities} />
        </div>
      </div>
      <div className='w-full flex flex-row flex-wrap justify-center items-center'>
        {
          citiesFiltered.length > 0 ? citiesFiltered.map((eachCity, index) => {
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

///////////////// Fin - Busqueda por frontend ///////////////// 


//////////////////// Busqueda por backend //////////////////// 

/* import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CityCard from '../components/CityCard';

const Cities = () => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    getCitiesData()
  }, []);

  const getCitiesData = (e) => {
    let searchCity = ""
    if (e) {
      searchCity = e.target.value
    }
    axios.get('http://localhost:4000/api/cities', {
      params: {
        city: searchCity
      }
    }).then((response) => {
      if (response.data) {
        setCities(response.data.response);
      }
    });
  }

  return (
    <div className='flex-grow'>
      <div>
        <div>
          <label htmlFor="search" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search</label>
          <input type="text" id="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..." onChange={getCitiesData} />
        </div>
      </div>
      <div className='w-full flex flex-row flex-wrap justify-center items-center'>
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

export default Cities */

///////////////// Fin - Busqueda por backend ///////////////// 