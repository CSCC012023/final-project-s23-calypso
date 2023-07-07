require('dotenv').config()
const neo4j = require('neo4j-driver');

const driver = neo4j.driver(process.env.NEO4JURL, neo4j.auth.basic(process.env.NEO4JUSER, process.env.NEO4JPASSWORD));

exports.getSession = (context) => {
  if (context.neo4jSession) {
    return context.neo4jSession;
  } else {
    context.neo4jSession = driver.session();
    return context.neo4jSession;
  }
}