import React from "react"
import { Box, Badge } from "@chakra-ui/react"
import { TimeIcon, ViewIcon } from "@chakra-ui/icons"

// Sample card from ArticleOverview

function ArticleOverview() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Modern home in city center in the heart of historic Los Angeles",
    readingtime: "2 min read Read More",
    Author: "Villager Liao",
    time: "2021-02-11",
  }

  return (
    <Box maxW="xxl" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="4">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="1" colorScheme="teal">
            {property.Author}
          </Badge>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h2"
          lineHeight="tight"
          fontSize="xl"
          isTruncated
        >
          {property.title}
        </Box>
        <Box d="flex" mt="2" alignItems="center" position="relative" mt="2">
          <Box as="span" color="gray.600" fontSize="sm">
            <ViewIcon  m="2" />
            {property.readingtime}
          </Box>
          <Box
            as="span"
            ml="2"
            color="gray.600"
            fontSize="sm"
            position="absolute"
            right="0"
          >
            <TimeIcon m="2" />
            {property.time}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ArticleOverview
