import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CityCard from '../components/CityCard';



const Cities = () => {
  /*const params = useParams()
  console.log(params);*/

  const [cities, setCities] = useState([])

  useEffect(() => {
    getCitiesData()
  }, []);


  const getCitiesData = (e) => {
    console.log("obteniendo ciudades")
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
    <div>
      <div>
        <div>
          <label htmlFor="search" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search</label>
          <input type="text" id="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..." onChange={getCitiesData} />
        </div>
      </div>
      <div className='w-full flex flex-row flex-wrap justify-center items-center'>
        {
          cities.map((eachCity, index) => {
            return (
              <CityCard city={eachCity} key={index} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Cities