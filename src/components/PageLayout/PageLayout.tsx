'use client'

import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
const PageLayout = ({ children }: Props) => {
  return (
    <main
      style={{
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text)',
        minHeight: '100vh',
        padding: 'var(--spacing-xl)',
        fontFamily: 'var(--font-main)',
      }}
    >
      {children}
    </main>
  )
}

export default PageLayout
