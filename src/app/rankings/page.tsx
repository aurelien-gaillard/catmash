'use client'
import React from 'react'
import BottomNavigation from '@/components/BottomNavigation/BottomNavigation'
import PageLayout from '@/components/PageLayout/PageLayout'
import { routes } from '@/utils/routes'
import { useCatStore } from '@/store/useCatStore'

const RankingsPage = () => {
  const { cats } = useCatStore()

  const sortedCats = cats.slice().sort((a, b) => b.votes - a.votes)
  console.log(sortedCats)

  return (
    <PageLayout>
      rankings
      <BottomNavigation href={routes['/']} label='Revenir au vote' />
    </PageLayout>
  )
}

export default RankingsPage
