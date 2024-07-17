import React from 'react'

const SocialMedia = () => {
  return (
    <div className="d-flex align-items-center justify-content-center gap-2 btn cursor-pointer">
      {['google', 'facebook', 'linkedin', 'twitter'].map((social, index) => (
        <img key={index} src={`/images/${social}.svg`} alt={social} />
      ))}
    </div>
  )
}

export default SocialMedia
