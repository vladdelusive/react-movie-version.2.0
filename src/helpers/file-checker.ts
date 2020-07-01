const fileTypes: string[] = [
    'image/jpg',
    'image/jpeg',
    'image/png',
]

export function validFileType(type: string) {
    return fileTypes.includes(type);
}

export function rightFileSize(number: number) {
    if(number > 1024 && number < 1048576) {
        return true
    } else {
        return false
    }
}