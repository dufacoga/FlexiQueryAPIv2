const express = require('express');
const swaggerUi = require('swagger-ui-express');
const { graphqlHTTP } = require('express-graphql');
const swaggerDocument = require('../swagger.json');

const config = require('./config');
const sqlRoutes = require('./infrastructure/rest/routes/SqlRoutes');
const apiKeyAuthMiddlewareFactory = require('./shared/middleware/ApiKeyAuthMiddleware');
const apiKeyAuthMiddleware = apiKeyAuthMiddlewareFactory(config.apiKey);

const schema = require('./infrastructure/graphql/Schema');
const resolvers = require('./infrastructure/graphql/Resolvers');

const app = express();
const PORT = config.port;

app.use(express.json());

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
}));

app.use('/api/sql', apiKeyAuthMiddleware, sqlRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger: http://localhost:${PORT}/swagger`);
  console.log(`GraphQL: http://localhost:${PORT}/graphql`);
});