'use client'
import React from 'react'
import BottomNavigation from '@/components/BottomNavigation/BottomNavigation'
import PageLayout from '@/components/PageLayout/PageLayout'
import { routes } from '@/utils/routes'

const RankingsPage = () => {
  return (
    <PageLayout>
      rankings
      <BottomNavigation href={routes['/']} label='Revenir au vote' />
    </PageLayout>
  )
}

export default RankingsPage
