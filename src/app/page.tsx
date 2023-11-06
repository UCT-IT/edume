import Features from '@/components/Features/Features'
import HeroSection from '@/components/HeroSection/HeroSection'
import { Text } from '@chakra-ui/react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Edume',
  description: 'Best Choice for Tutor Management Software',
}

export default function Home() {
  return (
    <>
    <HeroSection/>
    <Features />
    </>
  )
}
