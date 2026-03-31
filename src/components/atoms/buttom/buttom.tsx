import React from 'react'
import styles from './buttom.module.scss'

interface ButtonProps {
  children: React.ReactNode
}

export function Button({ children }: ButtonProps) {
  return <button className={styles.buttonCurriculum}>{children}</button>
}