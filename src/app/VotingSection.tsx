/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from 'react'
import { useCatStore } from '@/store/useCatStore'
import styles from './VotingSection.module.css'

export default function VotingSection() {
  const { getTwoRandomCats, voteForCat } = useCatStore()
  const [catPair, setCatPair] = useState(() => getTwoRandomCats())
  const [animatingCatId, setAnimatingCatId] = useState<string | null>(null)

  function handleVote(catId: string) {
    voteForCat(catId)
    setAnimatingCatId(catId)
    setTimeout(() => {
      setAnimatingCatId(null)
      setCatPair(getTwoRandomCats())
    }, 800)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          CatMash
          <span className={styles.subheading}>
            Which cat is cuter? Click to vote!
          </span>
        </h1>

        <div className={styles.catGrid}>
          {catPair.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleVote(cat.id)}
              className={styles.catCard}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={cat.url || '/placeholder.svg'}
                  alt={`Cat ${cat.id}`}
                  className={styles.catImage}
                />
              </div>
              <div className={styles.voteTag}>Vote for me!</div>
              {animatingCatId === cat.id && (
                <div className={styles.heartAnimation}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
