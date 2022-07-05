console.log('***** Music Collection *****')

const collection = [];

function addToCollection(title, artist, yearPublished) {
    console.log('The collection', collection);
    const newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }
    collection.push(newAlbum)
    return newAlbum;
}
console.log(addToCollection('Tical', 'Method Man', 1994));
console.log(addToCollection('36 Chambers', 'Wu-Tang Clan', 1993));
console.log(addToCollection('Starting Over', 'Chris Stapleton', 2020));
console.log(addToCollection('Permanent Vacation', 'Aerosmith', 1987));
console.log(addToCollection('An Evening With Silk Sonic', 'Silk Sonic', 2021));
console.log(addToCollection('LIVE.LOVE.A$AP', 'ASAP Rocky', 2011));
console.log(collection);
console.table(collection);







function showCollection(music) {
    console.log('show collection', music);
    for(let i = 0; i < music.length; i++){
        let album = music[i];
        console.log(album.title,);
    }
}
console.log(showCollection(collection));








function findByArtist(artistInput, collectionInput) {
    for (let artist of collectionInput) {
        if (artistInput === artist.artist){
            console.log(artist.artist);
         return artist;   
        }
    }
}
console.log(findByArtist('Method Man', collection));
console.log(findByArtist('Aerosmith', collection));