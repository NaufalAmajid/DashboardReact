import { motion } from "framer-motion"
import Header from "../components/common/Header"
import React from "react"
import { ORDERS_DATA } from "../constants"
import StatCard from "../components/common/StatCard"
import OrdersTable from "../components/orders/OrdersTable"
import DailyOrders from "../components/orders/DailyOrders"
import OrderDistributions from "../components/orders/OrderDistributions"

const OrdersPage = () => {
    return (
        <div className="flex-1 overflow-auto relative z-10">
            <Header title="Orders" />

            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
                {/* INCOME CARD */}
                <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {ORDERS_DATA.map((item) => (
                        <StatCard key={item.id} name={item.name} value={item.value} icon={item.icon} color={item.color} />
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <DailyOrders />
                    <OrderDistributions />
                </div>
                <OrdersTable />
            </main>
        </div>
    )
}

export default OrdersPage