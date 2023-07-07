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
  return result.records[0].get('n').properties;
}

const findByUsername = async (session, username) => {
  const query = [
    `MATCH (n: User {username: '${username}'})`,
    'RETURN n'
  ].join('\n');
  const result = await session.run(query);
  return result.records[0].get('n').properties;
}

const createUser = async (session, user) => {
  const query = [
    `CREATE (n: User {id: '${user.id}', username: '${user.username}', description: '${user.description}', pic: '${user.pic}', banner: '${user.banner}'})`,
    'RETURN n'
  ].join('\n');
  const result = await session.run(query);
  return result.records[0].get('n').properties;
}

const updateUser = async (session, id, user) => {
  const query = [
    `MATCH (n: User {id: '${id}'})`,
    `SET n.username = '${user.username}', n.description = '${user.description}', n.pic = '${user.pic}', n.banner = '${user.banner}'`,
    'RETURN n'
  ].join('\n');
  const result = await session.run(query);
  console.log(user)
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

module.exports = {
  findAll: findAll,
  findByID: findByID,
  findByUsername: findByUsername,
  createUser: createUser,
  updateUser: updateUser,
  deleteUser: deleteUser
}