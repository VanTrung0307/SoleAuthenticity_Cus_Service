// import { GetServerSideProps } from "next";
import Link from 'next/link'
import React from 'react'
import { ProductTypeList } from 'types'

type ProductCrumbType = {
  product: ProductTypeList
}

const Productcrumb = ({ product }: ProductCrumbType) => {
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
            <Link href="/products">
              <div>
                <a>All Products</a>
              </div>
            </Link>
          </li>
          <li>
            <a>{product.name}</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Productcrumb
