import React from 'react'
import MainChart from '../components/Dashboard_Components/MainChart'
import CompanyProfile from '../components/Dashboard_Components/CompanyProfile'
import TechnicalSignal from '../components/Dashboard_Components/technicalSignal'
import SearchBar from '../components/Dashboard_Components/searchBar'

const Dashboard = () => {
  return (
    <div>
    <SearchBar />
    <MainChart />
    <CompanyProfile />
    <TechnicalSignal />
    </div>
  )
}

export default Dashboard


