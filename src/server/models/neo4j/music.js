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
  return result.records[0].get('n').properties;
}

const getSongsByArtist = async (session, artist) => {
  const query = [
    `MATCH (n: Music {artist: '${artist}'})`,
    'RETURN n LIMIT 1'
  ].join('\n');
  const result = await session.run(query);
  return result.records[0].get('n').properties;
}

const searchByName = async (session, name) => {
  const query = [
    `MATCH (n: Music {name: '${name}'})`,
    'RETURN n'
  ].join('\n');
  const result = await session.run(query);
  return result.records[0].get('n').properties;
}

const createMusic = async (session, music) => {
  const query = [
    `CREATE (n: Music {name: '${music.name}', artist: '${music.artist}', description: '${music.description}', genres: [], pic: '${music.pic}', duration: '${music.duration}', price: '${music.price}'})`,
    'RETURN n'
  ].join('\n');
  const result = await session.run(query);
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
  return result.records[0].get('n').properties;
}

const deleteMusic = async (session, music) => {
  const query = [
    `MATCH (n: Music {name: '${music.name}', artist: '${music.artist}'})`,
    'DETACH DELETE n',
    'RETURN n'
  ].join('\n');
  await session.run(query);
  return await findAll(session);
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

module.exports = {
  findAll: findAll,
  findByNameAndArtist: findByNameAndArtist,
  getSongsByArtist: getSongsByArtist,
  searchByName: searchByName,
  createMusic: createMusic,
  updateMusic: updateMusic,
  deleteMusic: deleteMusic,
  findByUserID: findByUserID,
  findByUsername: findByUsername
}