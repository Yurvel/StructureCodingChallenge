import React from 'react'
import Image from 'next/image'

import newsCardStyles from '../../styles/NewsCard.module.css'

export const NewsCard = ({ event }) => {
  const { title, description, source, time, tag, imgURL } = event

  return (
    <div className={newsCardStyles.newsCard}>
      <div className={newsCardStyles.newsContent}>
        <p className={newsCardStyles.newsTitle}>{title}</p>
        <p className={newsCardStyles.newsDescription}>{description}</p>
        <div className={newsCardStyles.details}>
          <span className={newsCardStyles.source}>{source}</span>
          <span className={newsCardStyles.time}>{time}</span>
          <span className={newsCardStyles.tag}>{tag}</span>
        </div>
      </div>
      <div className={newsCardStyles.newsImage}>
        <Image src={imgURL} alt='Companion image' width={130} height={130} />
      </div>
    </div>
  )
}
