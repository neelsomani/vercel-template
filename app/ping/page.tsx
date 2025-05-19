'use client'

import { useEffect, useState } from 'react'

export default function Ping() {
  const [version, setVersion] = useState<string>('')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/ping`)
        const data = await response.json()
        setVersion(data.version)
      } catch (err) {
        setError('Failed to fetch version')
      }
    }

    fetchVersion()
  }, [])

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-slate-50 to-slate-100">
      {error ? (
        <h1 className="text-4xl font-bold text-red-600 sm:text-6xl md:text-7xl">{error}</h1>
      ) : (
        <h1 className="text-4xl font-bold text-slate-800 sm:text-6xl md:text-7xl">
          {version || 'Loading...'}
        </h1>
      )}
    </main>
  )
} 