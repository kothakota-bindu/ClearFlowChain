import { useState } from 'react'
import { useClearFlowChainContract } from '../hooks/useClearFlowChainContract'
import { usePublicClient } from 'wagmi'

export default function Dashboard() {
  const contract = useClearFlowChainContract()
  const publicClient = usePublicClient()

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)

  const [productId, setProductId] = useState("")
  const [product, setProduct] = useState<any | null>(null)

  const handleCreateProduct = async () => {
    try {
      setLoading(true)
      const hash = await contract.write.createProduct([name, description])
      await publicClient.waitForTransactionReceipt({ hash })
      alert("✅ Product created successfully!")
    } catch (err) {
      console.error("❌ Failed to create product", err)
      alert("Failed to create product")
    } finally {
      setLoading(false)
    }
  }

  const fetchProduct = async () => {
    try {
      const result = await contract.read.getProduct([BigInt(productId)])
      setProduct({
        name: result[0],
        description: result[1],
        status: result[2],
        createdAt: new Date(Number(result[3]) * 1000).toLocaleString(),
      })
    } catch (err) {
      console.error("❌ Failed to fetch product", err)
      alert("Product not found")
    }
  }

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">🚀 Supply Chain Dashboard</h1>

      {/* Create Product */}
      <div className="bg-white shadow p-4 rounded-xl">
        <h2 className="text-xl font-semibold mb-2">Create Product</h2>
        <input
          className="border p-2 w-full mb-2"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="border p-2 w-full mb-2"
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          onClick={handleCreateProduct}
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Product"}
        </button>
      </div>

      {/* Fetch Product */}
      <div className="bg-white shadow p-4 rounded-xl">
        <h2 className="text-xl font-semibold mb-2">Get Product by ID</h2>
        <input
          className="border p-2 w-full mb-2"
          placeholder="Enter Product ID"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded w-full"
          onClick={fetchProduct}
        >
          Fetch Product
        </button>

        {product && (
          <div className="mt-4 space-y-1 text-sm text-gray-700">
            <p><strong>Name:</strong> {product.name}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Status:</strong> {product.status}</p>
            <p><strong>Created At:</strong> {product.createdAt}</p>
          </div>
        )}
      </div>
    </div>
  )
}
