import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Heading, Link, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'

export const Trend = ({ title, subtitle, category, url }: { title: string, subtitle: string, category: [string], url:string }) => {
  return (
    <Box flexBasis={['100%', '', '23%']} mt={['20px', '', '0']}>
      <Tag variant='solid' colorScheme='blue' borderRadius='0'>
        {category[0].toUpperCase()}
      </Tag>
      <Box h='68px' textOverflow='ellipsis' mb={['10px',]}>
        <Heading fontSize='14px' mb={['10px', '', '20px']} mt={['10px','16px']} fontWeight='600'> {title} </Heading>
      </Box>
      <Box h='70px' mb='14px' overflow='hidden' >
        <Text fontSize={['12px', '', '']} fontWeight='400'> {subtitle} </Text>
      </Box>
      <NextLink href={`${url}`} passHref >
        <Link isExternal mt='10px' outline='0' _focus={{outline: 0}} textTransform='uppercase' fontWeight='100' > Read article <ExternalLinkIcon/> </Link>
      </NextLink>
    </Box>
  )
}
