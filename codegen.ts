
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://127.0.0.1:8000",
  documents: "app/**/*.tsx",
  generates: {
    "lib/gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
