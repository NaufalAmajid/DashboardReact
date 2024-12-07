import { motion } from "framer-motion"

import Header from "../components/common/Header"
import StatCard from "../components/common/StatCard"
import { OVERVIEW_INCOME } from "../constants"
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart"
import SalesTrendChart from "../components/products/SalesTrendChart"
import ProductsTable from "../components/products/ProductsTable"

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />

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

        {/* TABLE */}
        <ProductsTable />

        {/* CHART */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>

  )
}

export default ProductsPage