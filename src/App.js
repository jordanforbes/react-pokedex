import './App.css';
// import { ApolloClient } from 'apollo-boost';
import { gql, ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
// import { ApolloProvider } from '@apollo/react-hooks';

function App() {
  const client = new ApolloClient({
    uri: 'https://beta.pokeapi.co/graphql/v1beta',
    cache: new InMemoryCache(),
  })

  const GET_POKEMONS = gql`
    query pokemons($limit: Int, $offset: Int) {
      pokemons(limit: $limit, offset: $offset) {
        count
        next
        previous
        status
        message
        results {
          url
          name
          image
        }
      }
    }
  `

  const gqlVariables = {
    limit: 2,
    offset: 1
  }

  const Todos =()=>{
    const { loading, error, data} = useQuery(GET_POKEMONS, {
      variables: gqlVariables,
    });

      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`

      console.log('Response from server '+ data);
      return (<p>'Success!'</p>)
  }

  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;
