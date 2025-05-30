'use client'
import { useCatStore } from '@/store/useCatStore'
import React, { ReactNode, useEffect, useState } from 'react'

type Props = {
  children: ReactNode
}

const Providers = ({ children }: Props) => {
  const setCats = useCatStore((state) => state.setCats)
  const [isLoading, setIsLoading] = useState(true)

  // Fetch cats and initialized count with the app mounts
  useEffect(() => {
    const fetchCats = async () => {
      try {
        const res = await fetch('https://conseil.latelier.co/data/cats.json')
        const data = await res.json()

        const catsWithVotes = data.images.map(
          (img: { id: string; url: string }) => ({
            ...img,
            votes: Math.floor(Math.random() * 100),
          })
        )
        setCats(catsWithVotes)
        setIsLoading(false)
      } catch (error) {
        console.error('Failed to fetch cats:', error)
      }
    }

    fetchCats()
  }, [setCats])

  if (isLoading) return
  return <>{children}</>
}

export default Providers
