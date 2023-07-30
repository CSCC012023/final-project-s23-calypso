// Model file for Dashboard related queries

const getArtworks = async (session, id) => {
    let query = 'MATCH (n: Artwork) WHERE n.artist = "' + id + '" RETURN n';
    const result = await session.run(query);
    artworks = result.records.map(i => i.get('n').properties);
    return artworks;
}

const getAdminData = async (session) => {
    let query = 'MATCH (n: Page) RETURN n';
    const result = await session.run(query);
    artworks = result.records.map(i => i.get('n').properties);
    return artworks;
}

const incrementPage = async (session, page) => {
    let query = 'MATCH (n: Page) WHERE n.name = "' + page + '" SET n.visits = n.visits + 1 RETURN n';
    const result = await session.run(query);
    page = result.records.map(i=>i._fields[0].properties)
    return page
  }

module.exports = {
    getArtworks: getArtworks,
    getAdminData: getAdminData,
    incrementPage: incrementPage
}