// Model file for Artwork related queries

const filters = {
    medium: ['painting', 'drawing', 'sculpture', 'digitalmedium', 'photography', 'prints'],
    material: ['acrylic', 'artpaper', 'canvas', 'digitalmaterial', 'oil', 'mixedmedia'],
    rarity: ['unique', 'limited', 'open']
};



const getArtworks = async (session, sortParam, filtersParam) => {
    let query = 'MATCH (n: Artwork) ';

    // Check if filters were given
    if (filtersParam.length > 0) {
        query += 'WHERE ';

        filtersParam.forEach((filter) => {
            for (const category in filters) {
                if (filters[category].includes(filter)) {
                    query += `n.${category} = '${filter}' OR `;
                }
            }
        });
        // Remove the trailing 'OR ' from query
        query = query.slice(0, -3);
    }

    // Check if sort parameter was given
    if (sortParam === '') {
        query += `RETURN n`;
    }
    else{
        query += `RETURN n ORDER BY n.${sortParam}`;
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
            date: ${artwork.date},
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