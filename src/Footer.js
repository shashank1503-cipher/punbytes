import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaEnvelope, FaTwitter, FaGithub,FaLinkedin } from 'react-icons/fa';
  
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>Made With ❤️ by Shashank Srivastava</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'https://twitter.com/Shashan87956421'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/shashank-srivastava-a72899201/'}>
              <FaLinkedin />
            </SocialButton>
            
            <SocialButton label={'Github'} href={'https://github.com/shashank1503-cipher'}>
              <FaGithub />
            </SocialButton>
            <SocialButton label={'Mail'} href={'mailto:shashank.srivastava25sks@gmail.com'}>
              <FaEnvelope />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }
  