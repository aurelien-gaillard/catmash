'use client'
import React from 'react'
import BottomNavigation from '@/components/BottomNavigation/BottomNavigation'
import PageLayout from '@/components/PageLayout/PageLayout'
import { routes } from '@/utils/routes'
import CatRankings from './CatRankings'

const RankingsPage = () => {
  return (
    <PageLayout>
      <CatRankings />
      <BottomNavigation href={routes['/']} label='Revenir au vote' />
    </PageLayout>
  )
}

export default RankingsPage
