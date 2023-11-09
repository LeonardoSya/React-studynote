export function getImageUrl(person, size = 's') {
    return (
        'https://xxx.com/' +
        person.imageId +
        size +
        '.jpg'
    );
}