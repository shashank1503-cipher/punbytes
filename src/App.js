import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Flex,
  Heading,
  extendTheme,
  Text,
  useColorModeValue,
  Button,
  Spinner,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import '@fontsource/raleway/400.css';
import '@fontsource/poppins/700.css';
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
  const [error, setError] = useState(false);
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
      setError(true);
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
          <Flex justifyContent={'flex-end'} mr={10}>
            <Button onClick={getJoke}> Another One</Button>
          </Flex>
        </>
      )}
    </ChakraProvider>
  );
}

export default App;
