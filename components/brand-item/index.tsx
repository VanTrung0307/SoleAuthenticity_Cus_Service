import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { BrandTypeList } from 'types'

const BrandItem = ({ id, name, avatar }: BrandTypeList) => {
  return (
    <div className="brand-item">
      <Link href={`/brand/${id}`}>
        <div className="brand__image">
          <Image
            key={id}
            className="brand_img"
            src={avatar}
            alt="product"
            width={300}
            height={300}
          />
        </div>
      </Link>

      <div className="brand__name">{name}</div>
    </div>
  )
}

export default BrandItem
