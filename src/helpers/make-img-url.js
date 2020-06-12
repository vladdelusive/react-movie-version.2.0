import male from 'assets/images/unknown_male.png'
import female from 'assets/images/unknown_female.png'

export const makeImgUrl = (path, size, gender) => {
    if(!path) return gender === 2 ? male : female;
    return `https://image.tmdb.org/t/p/${size}${path}`;
}