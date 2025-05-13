'use client'
import React from 'react'
import Link from 'next/link'
import styles from './BottomNavigation.module.css'
import { useCatStore } from '@/store/useCatStore'

type Props = {
  href: string
  label: string
}
const BottomNavigation = ({ href, label }: Props) => {
  const totalVotes = useCatStore((state) => state.getTotalVotes())

  return (
    <Link href={href} className={styles.button}>
      <div className={styles.textWrapper}>
        <span className={styles.label}>{label}</span>
        <span className={styles.subtext}>{totalVotes} matchs joués</span>
      </div>
    </Link>
  )
}

export default BottomNavigation
