// Model file for Dashboard related queries

const getArtworks = async (session, id) => {
    let query = 'MATCH (n: Artwork) WHERE n.artist = "' + id + '" RETURN n';
    const result = await session.run(query);
    artworks = result.records.map(i => i.get('n').properties);
    return artworks;
}


module.exports = {
    getArtworks: getArtworks,
}