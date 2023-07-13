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


module.exports = {
    getArtworks: getArtworks,
}