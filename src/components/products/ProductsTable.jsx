import { motion } from "framer-motion"
import { Edit, Search, Trash } from "lucide-react"
import { useState } from "react"
import { PRODUCT_DATA } from "../../constants"

const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA)

  const handlerSearch = (e) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(e.target.value)
    const filtered = PRODUCT_DATA.filter(
      product => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term)
    )
    setFilteredProducts(filtered)
  }

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handlerSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="th-product">Name</th>
              <th className="th-product">Category</th>
              <th className="th-product">Price</th>
              <th className="th-product">Stock</th>
              <th className="th-product">Sale</th>
              <th className="th-product">#</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredProducts.length === 0 && <tr><td colSpan={6} className="text-center p-2">No products found</td></tr>}
            {filteredProducts.map((product) => (
              <motion.tr key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                  <img
                    src="https://images.unsplash.com/photo-1503328427499-d92d1ac3d174?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D"
                    alt="product"
                    className="size-10 rounded-full"
                  />
                  {product.name}
                </td>
                <td className="td-product">{product.category}</td>
                <td className="td-product">{product.price.toFixed(2)}</td>
                <td className="td-product">{product.stock}</td>
                <td className="td-product">{product.sales}</td>
                <td className="td-product">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <Trash size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default ProductsTable