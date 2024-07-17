import React from 'react'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <footer className="footer text-center mt-4 mb-4">
      <SocialMedia />
      <p className="mt-4">Example@email.com</p>
      <p>Copyright © 2020 Name. All rights reserved.</p>
    </footer>
  )
}

export default Footer
