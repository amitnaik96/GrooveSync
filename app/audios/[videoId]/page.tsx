"use client"
import dynamic from 'next/dynamic'
import { Navbar } from '@/components/navbar';
 
// hydration errors due to window
const Listen = dynamic(() => import('../../../components/listen'), { ssr: false })
 
export default function Page() {
  return (
    <div>
      <Navbar />
      <Listen />
    </div>
  )
}