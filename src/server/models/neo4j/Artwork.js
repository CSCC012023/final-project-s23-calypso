//Model file for Artwork related queries

const findAll = async (session) => {
    const result = await session.run('MATCH (n: Artwork) RETURN n');
    return result.records.map(i => i.get('n').properties);
}


module.exports = {
    findAll: findAll,
}