const { GraphQLServer } = require('graphql-yoga')
const gqlServerConfig = require('./api')

require('./db')()

const serverOptions = {
  port: 8000,
  endpoint: '/graphql',
  playground: '/docs',
  tracing: true,
  debug: true
}

const server = new GraphQLServer(gqlServerConfig)
server.start(serverOptions, ({ port }) =>
  console.log(`Server running on port ${port}`)
)
