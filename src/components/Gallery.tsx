import React from 'react'
import GalleryItem, { Item } from './GalleryItem'

interface GalleryProps {
    data: Item[]
}

function Gallery(props: GalleryProps) {

    const display = props.data.map((item: Item, index: number) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
