import { IEmployees } from 'lib/zustand/employee'

export const employeeData: {
  name: string
  text: string
  read: boolean
  img: string
  color: string
  key: IEmployees
}[] = [
  {
    name: 'Crypto Buddy',
    text: 'Buddy manages your crypto wallet and help you make on chain transactions',
    read: true,
    img: '/employees/buddy.webp',
    color: 'bg-blue-500',
    key: 'Crypto',
  },
  {
    name: 'Finance',
    text: 'Manage your finance',
    read: true,
    img: '/employees/cassie.webp',
    color: 'bg-blue-700',
    key: 'Finance',
  },
  {
    name: 'Tweet Generator',
    text: 'Generate tweets and post tweets based on your brand',
    read: true,
    img: '/employees/gigiGreen.webp',
    color: 'bg-green-600',
    key: 'TweetGenerator',
  },
  {
    name: 'Daily Motivation',
    text: 'Get your daily inspiration to get going',
    read: false,
    img: '/employees/milliPink.webp',
    color: 'bg-pink-600',
    key: 'DailyMotivation',
  },
  {
    name: 'Email Generator',
    text: 'Professional Email Generator',
    read: false,
    img: '/employees/penTeal.webp',
    color: 'bg-teal-600',
    key: 'EmailMarketing',
  },
  {
    name: 'Instagram',
    text: 'Help you manage your instagram account',
    read: true,
    img: '/employees/soshiePurple.webp',
    color: 'bg-purple-500',
    key: 'Instagram',
  },
]
