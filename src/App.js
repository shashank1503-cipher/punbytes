import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Flex,
  Heading,
  extendTheme,
  Text,
  Button,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import '@fontsource/raleway/400.css';
import '@fontsource/poppins/700.css';
import Footer from './Footer';
function App() {
  const customTheme = {
    styles: {
      global: () => ({
        body: {
          bg: '#121212',
        },
      }),
    },
  };
  const theme = extendTheme(customTheme);
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const getJoke = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(
        'https://v2.jokeapi.dev/joke/Programming?type=single'
      );
      const data = await res.json();
      setJoke(data.joke);
    } catch (error) {
      console.error(error);
      setError(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getJoke();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Flex justifyContent={'space-between'} p={5}>
        <Heading size="lg" color="#21E6C1" fontFamily={`'Poppins', sans-serif`}>
          Punbytes
        </Heading>
      </Flex>
      {loading ? (
        <Flex
          minH={'75vh'}
          fontSize={'2xl'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Spinner color="#21E6C1" size={'xl'} />
        </Flex>
      ) : error ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{error.title}</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      ) : (
        <>
          <Flex justifyContent={'center'} alignItems={'center'} minH={'75vh'}>
            <Text
              fontSize={'3xl'}
              textAlign="center"
              color="#21E6C1"
              fontFamily={`'Raleway', sans-serif`}
            >
              {joke}
            </Text>
          </Flex>
          <Flex justifyContent={['center','center','flex-end','flex-end']} mr={10} mb={12}>
            <Button onClick={getJoke}> Another One</Button>
          </Flex>
        </>
      )}
      <Footer />
    </ChakraProvider>
  );
}

export default App;
