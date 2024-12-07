import Header from "../components/common/Header"
import { motion } from "framer-motion"
import { SALES_DATA } from "../constants"
import StatCard from "../components/common/StatCard"
import SalesOverviewChart from "../components/sales/SalesOverviewChart"
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart"
import DailySalesTrend from "../components/sales/DailySalesTrend"

const SalesPage = () => {
    return (
        <div className="flex-1 overflow-auto relative z-10">
            <Header title="Sales" />

            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
                {/* INCOME CARD */}
                <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {SALES_DATA.map((item) => (
                        <StatCard key={item.id} name={item.name} value={item.value} icon={item.icon} color={item.color} />
                    ))}
                </motion.div>
                <SalesOverviewChart />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <SalesByCategoryChart />
                    <DailySalesTrend />
                </div>
            </main>
        </div>
    )
}

export default SalesPage