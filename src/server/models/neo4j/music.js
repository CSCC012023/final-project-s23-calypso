const findAll = async (session) => {
  const result = await session.run('MATCH (n: Music) RETURN n');
  return result.records.map(i => i.get('n').properties);
}

const findByNameAndArtist = async (session, props) => {
  const query = [
    `MATCH (n: Music {name: '${props.name}', artist: '${props.artist}'})`,
    'RETURN n LIMIT 1'
  ].join('\n');
  const result = await session.run(query);
  return result.records.map(i=>i._fields[0].properties)
}

const getSongsByArtist = async (session, artist) => {
  const query = [
    `MATCH (n: Music {artist: '${artist}'})`,
    'RETURN n LIMIT 1'
  ].join('\n');
  const result = await session.run(query);
  return result.records.map(i=>i._fields[0].properties)
}

const getRecommendedSongs = async (session, username) => {
  const query = [
    `MATCH (n: User)-[r:OWNS]->(sharedProduct:Music)<-[:OWNS]-(c: User)`,
    `WHERE n.username = '${username}'`,
    `MATCH (c)-[:OWNS]->(newProduct:Music)`,
    `WHERE newProduct.name <> sharedProduct.name`,
    `RETURN DISTINCT newProduct`,
  ].join('\n');
  const result = await session.run(query);
  return result.records.map(i=>i._fields[0].properties)
}

const searchByName = async (session, name) => {
  const query = [
    `MATCH (n: Music {name: '${name}'})`,
    'RETURN n'
  ].join('\n');
  const result = await session.run(query);
  return result.records.map(i=>i._fields[0].properties)
}

const createMusic = async (session, music, userid) => {
  const query = [
    `CREATE (n: Music {
      name: '${music.name}',
      artist: '${music.artist}',
      description: '${music.description}',
      genres: ${JSON.stringify(music.genres)},
      pic: '${music.pic}',
      duration: '${music.duration}',
      price: '${music.price}'
    })`,
    `WITH n`,
    `MATCH (u: User {id: '${userid}'})`,
    `CREATE (u)-[:OWNS]->(n)`,
    'RETURN n'
  ].join('\n');
  const result = await session.run(query);
  if (result.records.length === 0) return null;
  return result.records[0].get('n').properties;
}

const updateMusic = async (session, music) => {
  const query = [
    `MATCH (n: Music {name: '${music.name}', artist: '${music.artist}'})`,
    `SET description: '${music.description}', genres: [], pic: '${music.pic}', duration: '${music.duration}', price: '${music.price}'`,
    'RETURN n'
  ].join('\n');
  const result = await session.run(query);
  console.log(user)
  return result.records.map(i=>i._fields[0].properties)
}

const deleteMusic = async (session, name, artist) => {
  const query = [
    `MATCH (n: Music {name: '${name}', artist: '${artist}'})`,
    'DETACH DELETE n',
    'RETURN n'
  ].join('\n');
  await session.run(query);
}

const findByUserID = async (session, id) => {
  const query = [
    `MATCH (n: User {id: '${id}'})-[:OWNS]->(m: Music)`,
    'RETURN m'
  ].join('\n');
  const result = await session.run(query);
  return result.records.map(i => i.get('m').properties);
}

const findByUsername = async (session, username) => {
  const query = [
    `MATCH (n: User {username: '${username}'})-[:OWNS]->(m: Music)`,
    'RETURN m'
  ].join('\n');
  const result = await session.run(query);
  return result.records.map(i => i.get('m').properties);
}

const findSongByNameAndArtist = async (session, name, artist) => {
  const query = [
    `MATCH (m: Music {name: '${name}', artist: '${artist}'})`,
    'RETURN m'
  ].join('\n');
  const result = await session.run(query);
  if (result.records.length === 0) return null;
  return result.records[0].get('m').properties;
}

module.exports = {
  findAll: findAll,
  findByNameAndArtist: findByNameAndArtist,
  getRecommendedSongs: getRecommendedSongs,
  getSongsByArtist: getSongsByArtist,
  searchByName: searchByName,
  createMusic: createMusic,
  updateMusic: updateMusic,
  deleteMusic: deleteMusic,
  findByUserID: findByUserID,
  findByUsername: findByUsername,
  findSongByNameAndArtist: findSongByNameAndArtist
}