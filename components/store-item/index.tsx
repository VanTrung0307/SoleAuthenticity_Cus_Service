import Image from 'next/image'
import Link from 'next/link'
import { StoreTypeList } from 'types'

const StoreItem = ({ id, name, address, avatar }: StoreTypeList) => {
  return (
    <div
      className="product-item"
      style={{
        border: '1px solid black',
        borderRadius: '20px',
        height: '130px',
        cursor: 'pointer',
      }}
    >
      <div
        className="product__image"
        style={{ width: '100px', height: '100px', borderRadius: '20px' }}
      >
        <Link href={`/store/${id}`}>
          <a>
            <Image
              style={{
                borderRadius: '20px',
                textAlign: 'left',
                marginLeft: '15px',
                marginTop: '15px',
              }}
              src={avatar}
              alt="product"
            />
          </a>
        </Link>
      </div>

      <Link href={`/store/${id}`}>
        <div
          className="product__description"
          style={{
            marginTop: '-120px',
            marginLeft: '150px',
            cursor: 'pointer',
          }}
        >
          <h3 style={{ fontWeight: 'bold' }}>{name}</h3>
          <div style={{ display: 'inline-block' }}>
            <Image
              src="/images/location.png"
              alt=""
              style={{ width: '30px', height: '30px' }}
            />
            <h3>{address}</h3>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default StoreItem
