import React from 'react'


const ALL_FOTO = [
    {index: '1', img: "../../img/gallery1.jpg" },
    {index: '2', img: "../../img/gallery2.png" },
    {index: '3', img: "../../img/gallery3.png" },
    {index: '4', img: "../../img/gallery4.jpg" },
    {index: '5', img: "../../img/gallery5.jpg" },
    {index: '6', img: "../../img/gallery6.png" },
]

const Gallery = () => {
  return (
    <div className='gallery'>

        
        {ALL_FOTO.map(({img, index}) => (
            <div className='gallery-img' key={index}>
                <img src={img} />
            </div>
        ))}

    </div>
  )
}

export default Gallery
