import React from 'react'
import MainChart from '../components/Dashboard_Components/MainChart'
import CompanyProfile from '../components/Dashboard_Components/CompanyProfile'
import TechnicalSignal from '../components/Dashboard_Components/technicalSignal'

const Dashboard = () => {
  return (
    <div><MainChart />
    <CompanyProfile />
    <TechnicalSignal />
    </div>
  )
}

export default Dashboard


