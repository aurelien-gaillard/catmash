/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import styles from './CatRankings.module.css'
import { useCatStore } from '@/store/useCatStore'

const CatRankings = () => {
  const { cats } = useCatStore()

  const sortedCats = cats.slice().sort((a, b) => b.votes - a.votes)

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Cat Mash</h1>
        <div className={styles.rankingsGrid}>
          {sortedCats.map((cat, index) => (
            <div key={cat.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <img
                  src={cat.url || '/placeholder.svg'}
                  alt={`Cat ranked #${index + 1}`}
                  className={styles.image}
                />
              </div>
              <div
                className={styles.rankBadge}
                style={{
                  backgroundColor: index < 3 ? 'gold' : 'white',
                  color: index < 3 ? 'white' : 'var(--text)',
                }}
              >
                {index + 1}
              </div>

              <div className={styles.votesBadge}>{cat.votes} votes</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default CatRankings
