import male from 'assets/images/unknown_male.png'
import female from 'assets/images/unknown_female.png'

const imgSizes = {
    default: "w500",
    large: "w780",
}

const imgPlaceholders = {
    male,
    female,
    picture: "https://image.shutterstock.com/image-vector/no-image-available-icon-template-600w-1036735678.jpg"
}

export const makeImgUrl = (path, options) => {
    const { size = "default", placeholder = "picture" } = options || {};
    if(!path){
        return imgPlaceholders[placeholder]
    }
    return `https://image.tmdb.org/t/p/${imgSizes[size]}${path}`;
}