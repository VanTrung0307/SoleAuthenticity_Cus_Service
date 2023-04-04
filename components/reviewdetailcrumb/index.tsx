import Link from 'next/link'
import React from 'react'
import { ReviewTypeList } from 'types'

type ReviewDetailCrumbType = {
  review: ReviewTypeList
}

const ReviewDetailcrumb = ({ review }: ReviewDetailCrumbType) => {
  return (
    <section className="breadcrumb">
      <div className="container">
        <ul className="breadcrumb-list">
          <li>
            <Link href="/">
              <div>
                <a>
                  <i className="icon-home"></i>
                </a>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/reviews">
              <div>
                <a>All Reviews</a>
              </div>
            </Link>
          </li>
          <li>
            <a>{review.title}</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ReviewDetailcrumb
