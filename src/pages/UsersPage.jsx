import { motion } from 'framer-motion'
import { USERS_INCOME } from '../constants'

import Header from '../components/common/Header'
import StatCard from '../components/common/StatCard'
import UsersTable from '../components/users/UsersTable'
import UserDemograpichsChart from '../components/users/UserDemograpichsChart'
import UserActivityHeatMap from '../components/users/UserActivityHeatMap'
import UserGrowthChart from '../components/users/UserGrowthChart'

const UsersPage = () => {
    return (
        <div className="flex-1 overflow-auto relative z-10">
            <Header title="Users" />

            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
                {/* INCOME CARD */}
                <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {USERS_INCOME.map((item) => (
                        <StatCard key={item.id} name={item.name} value={item.value} icon={item.icon} color={item.color} />
                    ))}
                </motion.div>

                <UsersTable />

                {/* USER CHART */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                    <UserGrowthChart />
                    <UserActivityHeatMap />
                    <UserDemograpichsChart />
                </div>
            </main>
        </div>
    )
}

export default UsersPage