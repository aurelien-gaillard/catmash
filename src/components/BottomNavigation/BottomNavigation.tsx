'use client'
import React from 'react'
import Link from 'next/link'
import styles from './BottomNavigation.module.css'

type Props = {
  href: string
  label: string
}
const BottomNavigation = ({ href, label }: Props) => {
  return (
    <Link href={href} className={styles.button}>
      {label}
    </Link>
  )
}

export default BottomNavigation
