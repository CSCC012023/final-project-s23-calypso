const findAll = async (session) => {
  const result = await session.run('MATCH (n: User) RETURN n');
  return result.records.map(i => i.get('n').properties);
}

const findByID = async (session, id) => {
  const query = [
    `MATCH (n: User {id: '${id}'})`,
    'RETURN n LIMIT 1'
  ].join('\n');
  const result = await session.run(query);
  if (result.records.length === 0) return null;
  return result.records[0].get('n').properties;
}

const findByUsername = async (session, username) => {
  const query = [
    `MATCH (n: User {username: '${username}'})`,
    'RETURN n'
  ].join('\n');
  const result = await session.run(query);
  if (result.records.length === 0) return null;
  return result.records[0].get('n').properties;
}

const createUser = async (session, user) => {
  const query = [
    `CREATE (n: User {
      id: "${user.id}", 
      username: '${user.username}',
      name: '${user.name}',
      description: '${user.description}',
      pic: '${user.pic}', 
      banner: '${user.banner},
      visits: ${user.visits}'
    })`,
    'RETURN n'
  ].join('\n');
  const result = await session.run(query);
  if (result.records.length === 0) return null;
  return result.records[0].get('n').properties;
}

const updateUser = async (session, id, user) => {
  const query = [
    `MATCH (n: User {id: '${id}'})`,
    `SET 
      n.username = '${user.username}',
      n.name = '${user.name}', 
      n.description = '${user.description}', 
      n.pic = '${user.pic}', 
      n.banner = '${user.banner},'
      n.visits = ${user.visits}`,
    'RETURN n'
  ].join('\n');
  const result = await session.run(query);
  if (result.records.length === 0) return null;
  return result.records[0].get('n').properties;
}

const deleteUser = async (session, id) => {
  const query = [
    `MATCH (n: User {id: '${id}'})`,
    'DETACH DELETE n',
    'RETURN n'
  ].join('\n');
  await session.run(query);
  return await findAll(session);
}

const incrementVisits = async (session, id) => {
  let query = 'MATCH (n: User) WHERE n.id = "' + id + '" SET n.visits = n.visits + 1 RETURN n';
  const result = await session.run(query);
  user = result.records.map(i=>i._fields[0].properties)
  return user
}

const findByPartName = async (session, name) => {
  const query = [
    `MATCH (n: User)`,
    `WHERE n.name CONTAINS '${name}' OR n.username CONTAINS '${name}'`,
    'RETURN DISTINCT n'
  ].join('\n');
  const result = await session.run(query);
  return result.records.map(i => i.get('n').properties);
}

module.exports = {
  findAll: findAll,
  findByID: findByID,
  findByUsername: findByUsername,
  createUser: createUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
  incrementVisits: incrementVisits,
  findByPartName: findByPartName
}