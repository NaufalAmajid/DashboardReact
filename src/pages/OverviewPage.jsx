import { motion } from "framer-motion"

import Header from "../components/common/Header"
import StatCard from "../components/common/StatCard"
import { OVERVIEW_INCOME } from "../constants"
import SaleOverviewChart from "../components/overview/SaleOverviewChart"
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart"
import SalesChannelChart from "../components/overview/SalesChannelChart"

const OverviewPage = () => {
    return (
        <div className="flex-1 overflow-auto relative z-10">
            <Header title="Overview" />

            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
                {/* INCOME CARD */}
                <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {OVERVIEW_INCOME.map((item) => (
                        <StatCard key={item.id} name={item.name} value={item.value} icon={item.icon} color={item.color} />
                    ))}
                </motion.div>

                {/* CHART */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <SaleOverviewChart />
                    <CategoryDistributionChart />
                    <SalesChannelChart />
                </div>
            </main>
        </div>
    )
}

export default OverviewPage