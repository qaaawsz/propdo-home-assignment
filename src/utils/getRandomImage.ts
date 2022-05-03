import {images} from '../global/export'

const getRandomImage = (min: number, max: number) => {
    const num = Math.floor(Math.random() * (max - min) + min)
    switch (num) {
        case 1:
            return images.prop1
        case 2:
            return images.prop2
        case 3:
            return images.prop3
        case 4:
            return images.prop4
        case 5:
            return images.prop5
        default:
            return images.prop1
    }
}

export default getRandomImage
