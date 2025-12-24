import React, { useState, useEffect } from 'react'

export default function AddressModal({ initialAddress = {}, onClose, onSubmit }) {
  const [address, setAddress] = useState({
    line1: '',
    line2: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India'
  })
  const [saveAddress, setSaveAddress] = useState(true)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (initialAddress) {
      setAddress(prev => ({ ...prev, ...initialAddress }))
    }
  }, [initialAddress])

  const handleChange = (e) => {
    const { name, value } = e.target
    setAddress(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await onSubmit(address, saveAddress)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 z-40" onClick={onClose} />

      <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()} className="relative z-50 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
          <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>

          <div className="grid grid-cols-1 gap-3">
            <input name="line1" value={address.line1} onChange={handleChange} placeholder="Address line 1" className="w-full rounded border px-3 py-2" required />
            <input name="line2" value={address.line2} onChange={handleChange} placeholder="Address line 2 (optional)" className="w-full rounded border px-3 py-2" />
            <div className="grid grid-cols-2 gap-3">
              <input name="city" value={address.city} onChange={handleChange} placeholder="City" className="w-full rounded border px-3 py-2" required />
              <input name="state" value={address.state} onChange={handleChange} placeholder="State" className="w-full rounded border px-3 py-2" required />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input name="pincode" value={address.pincode} onChange={handleChange} placeholder="Pincode" className="w-full rounded border px-3 py-2" required />
              <input name="country" value={address.country} onChange={handleChange} placeholder="Country" className="w-full rounded border px-3 py-2" required />
            </div>

            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" checked={saveAddress} onChange={() => setSaveAddress(s => !s)} />
              <span className="text-sm">Save this address for next time</span>
            </label>

            <div className="flex gap-3 justify-end mt-4">
              <button type="button" onClick={onClose} className="px-4 py-2 rounded border">Cancel</button>
              <button type="submit" disabled={loading} className="px-4 py-2 rounded bg-black text-white">{loading ? 'Processing...' : 'Place Order'}</button>
            </div>
          </div>
        </form>
    </div>
  )
}
