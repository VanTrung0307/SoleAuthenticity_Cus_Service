/* eslint-disable @next/next/no-html-link-for-pages */
// import { GetServerSideProps } from "next";
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
            <div>
              <a href="/">
                <i className="icon-home"></i>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="/products">All Products</a>
            </div>
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
