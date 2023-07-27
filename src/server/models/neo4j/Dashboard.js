// Model file for Dashboard related queries

const getArtworks = async (session, id) => {
    let query = 'MATCH (n: Artwork) WHERE n.artist = "' + id + '" RETURN n';
    const result = await session.run(query);
    artworks = result.records.map(i => i.get('n').properties);
    return artworks;
}

// const findByID = async (session, id) => {
//     const query = [
//         `MATCH (n: Artwork {id: '${id}'})`,
//         `RETURN n`
//     ].join('\n');
//     const result = await session.run(query);
//     if (result.records.length === 0) return null;
//     return result.records[0].get('n').properties;
// }

// const findByUserID = async (session, id) => {
//     const query = [
//         `MATCH (u: User {id: '${id}'})`,
//         `WITH u`,
//         `MATCH (a: Artwork {artist: u.username})`,
//         `RETURN a`
//     ].join('\n');
//     const result = await session.run(query);
//     return result.records.map(i => i.get('a').properties);
// }

// const findByUsername = async (session, username) => {
//     const query = [
//         `MATCH (a: Artwork {artist: '${username}'})`,
//         `RETURN a`
//     ].join('\n');
//     const result = await session.run(query);
//     return result.records.map(i => i.get('a').properties);
// }

// const postArtwork = async (session, artwork) => {
//     const query = [
//         `CREATE (a: Artwork {
//             id: "${artwork.id}",
//             name: "${artwork.name}",
//             artist: "${artwork.artist}",
//             style: "${artwork.style}",
//             material: "${artwork.material}",
//             medium: "${artwork.medium}",
//             rarity: "${artwork.rarity}",
//             price: ${artwork.price},
//             date: ${artwork.date},
//             href: "${artwork.href}",
//             imageSrc: "${artwork.imageSrc}",
//             imageAlt: "${artwork.imageAlt}"
//         })`,
//         `RETURN a`
//     ].join('\n');
//     const result = await session.run(query);
//     if (result.records.length === 0) return null;
//     return result.records[0].get('a').properties;
// }

// const updateArtwork = async (session, id, artwork) => {
//     const query = [
//         `MATCH (a: Artwork {id: '${id}'})`,
//         `SET 
//             a.name = '${artwork.name}',
//             a.artist = '${artwork.artist}',
//             a.style = '${artwork.style}',
//             a.material = '${artwork.material}',
//             a.medium = '${artwork.medium}',
//             a.rarity = '${artwork.rarity}',
//             a.price = ${artwork.price},
//             a.date = ${artwork.date},
//             a.href = '${artwork.href}',
//             a.imageSrc = '${artwork.imageSrc}',
//             a.imageAlt = '${artwork.imageAlt}'`,
//         `RETURN a`
//     ].join('\n');
//     const result = await session.run(query);
//     if (result.records.length === 0) return null;
//     return result.records[0].get('a').properties;
// }

// const deleteArtwork = async (session, id) => {
//     const query = [
//         `MATCH (a: Artwork {id: '${id}'})`,
//         `DETACH DELETE a`,
//         `RETURN a`
//     ].join('\n');
//     await session.run(query);
//     //return {};
// }

// const getByCategory = async (session, category) => {

//   const query = [
//       `MATCH (m: Music)`,
//       `WHERE "${category}" IN m.genres`,
//       `RETURN m`
//   ].join('\n');
//   console.log(query)
//   const result = await session.run(query);
//   return result.records.map(i=>i._fields[0].properties)
// }

// const getRecommendedArtworks = async (session, username) => {
//     const query = [
//       `MATCH (n: User)-[r:OWNS]->(sharedProduct:Artwork)<-[:OWNS]-(c: User)`,
//       `WHERE n.username = '${username}'`,
//       `MATCH (c)-[:OWNS]->(newProduct:Artwork)`,
//       `WHERE newProduct.name <> sharedProduct.name`,
//       `RETURN DISTINCT newProduct`,
//     ].join('\n');
//     const result = await session.run(query);
//     return result.records.map(i=>i._fields[0].properties)
// }

module.exports = {
    getArtworks: getArtworks,
    // getArtworkById: getArtworkById,
    // findByID: findByID,
    // findByUserID: findByUserID,
    // findByUsername: findByUsername,
    // postArtwork: postArtwork,
    // updateArtwork: updateArtwork,
    // deleteArtwork: deleteArtwork,
    // getByCategory: getByCategory,
    // getRecommendedArtworks: getRecommendedArtworks
}