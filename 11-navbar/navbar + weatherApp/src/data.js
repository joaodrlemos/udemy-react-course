import React from 'react'
import { FaBehance, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/weather',
    text: 'weather',
  },
  {
    id: 4,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 5,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 6,
    url: '/profile',
    text: 'profile',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.behance.net',
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: 'https://www.instagram.com',
    icon: <FaInstagram />,
  },
]
