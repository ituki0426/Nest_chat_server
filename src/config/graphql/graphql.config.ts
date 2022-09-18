import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

const GraphQLConfigDevelopment = () =>
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    subscriptions: {
      'graphql-ws': true,
    },
    path: '/graphql',
    introspection: true,
    cache: 'bounded',
    autoSchemaFile: join(process.cwd(), './schema.gql'),
    sortSchema: true,
    playground: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    debug: true,
  });
export default GraphQLConfigDevelopment;
