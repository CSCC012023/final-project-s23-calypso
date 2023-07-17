//Model file for Artwork related queries

const getArtworks = async (session, sortParam) => {
    let query = '';

    if (sortParam === '') {
        query = `MATCH (n: Artwork) RETURN n`;
    }
    else{
        query = `MATCH (n: Artwork) RETURN n ORDER BY n.${sortParam}`;
    }
    

    const result = await session.run(query);
    artworks = result.records.map(i => i.get('n').properties);
    return artworks;
}

const findByID = async (session, id) => {
    const query = [
        `MATCH (n: Artwork {id: '${id}'})`,
        `RETURN n`
    ].join('\n');
    const result = await session.run(query);
    if (result.records.length === 0) return null;
    return result.records[0].get('n').properties;
}

const findByUserID = async (session, id) => {
    const query = [
        `MATCH (u: User {id: '${id}'})-[:OWNS]->(a: Artwork)`,
        `RETURN a`
    ].join('\n');
    const result = await session.run(query);
    return result.records.map(i => i.get('a').properties);
}

const findByUsername = async (session, username) => {
    const query = [
        `MATCH (u: User {username: "${username}"})-[:OWNS]->(a: Artwork)`,
        `RETURN a`
    ].join('\n');
    const result = await session.run(query);
    return result.records.map(i => i.get('a').properties);
}

const postArtwork = async (session, userid, artwork) => {
    const query = [
        `CREATE (a: Artwork {
            id: "${artwork.id}",
            name: "${artwork.name}",
            artist: "${artwork.artist}",
            style: "${artwork.style}",
            material: "${artwork.material}",
            medium: "${artwork.medium}",
            rarity: "${artwork.rarity}",
            price: ${artwork.price},
            href: "${artwork.href}",
            imageSrc: "${artwork.imageSrc}",
            imageAlt: "${artwork.imageAlt}"
        })`,
        `WITH a`,
        `MATCH (u: User {id: '${userid}'})`,
        `CREATE (u)-[:OWNS]->(a)`,
        `RETURN a`
    ].join('\n');
    const result = await session.run(query);
    if (result.records.length === 0) return null;
    return result.records[0].get('a').properties;
}

const deleteArtwork = async (session, id) => {
    const query = [
        `MATCH (a: Artwork {id: '${id}'})`,
        `DETACH DELETE a`,
        `RETURN a`
    ].join('\n');
    await session.run(query);
    //return {};
}

module.exports = {
    getArtworks: getArtworks,
    findByID: findByID,
    findByUserID: findByUserID,
    findByUsername: findByUsername,
    postArtwork: postArtwork,
    deleteArtwork: deleteArtwork,
}