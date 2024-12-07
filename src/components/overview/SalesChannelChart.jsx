import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts"
import { OVERVIEW_CHANNEL_DATA, OVERVIEW_COLORS_CHART } from "../../constants"

const SalesChannelChart = () => {
    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
        >
            <h2 className="text-lg font-medium mb-4 text-gray-100">Sales By Channel</h2>

            <div className="h-80">
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <BarChart
                        data={OVERVIEW_CHANNEL_DATA}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                        <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} />
                        <YAxis stroke="#9CA3AF" fontSize={12} />
                        <Tooltip
                            contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
                            itemStyle={{ color: "#E5E7EB" }}
                        />
                        <Legend />
                        <Bar
                            dataKey={"value"}
                            fill="#8884D8"
                        >
                            {OVERVIEW_CHANNEL_DATA.map((entry, i) => (
                                <Cell key={`cell-${i}`} fill={OVERVIEW_COLORS_CHART[i % OVERVIEW_COLORS_CHART.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default SalesChannelChart