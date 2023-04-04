import Image from 'next/image'
import React from 'react';

function FirebaseImage() {
  return (
    <div>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/soleauthenticity-8f48f.appspot.com/o/5f6b087f8fc52.jpg?alt=media&token=7972ccca-c722-44e3-be33-cae304f488f9"
        alt="My image"
        width={600}
        height={400}
      />
    </div>
  )
}