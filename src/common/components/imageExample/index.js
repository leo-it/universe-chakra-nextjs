import React from 'react'

const ImageExample = () => {
  return (
    <div className=" relative w-[239px] h-[83px]">
    <Image
        src="/react.jpg"
        alt="Picture of the author"
        layout="fill"
        /* objectFit="cover" */
        objectFit="contain"
    />
</div>
  )
}

export default ImageExample