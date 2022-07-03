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

function showCollection(params) {
    
}


