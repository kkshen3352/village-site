import React from "react"
import { graphql } from "gatsby"
import { Box, IconButton, Flex } from "@chakra-ui/react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons"
import Kshenimg from "../images/S__16711685.jpg"

const SecondPage = ({ data }) => {
  const {
    site: {
      siteMetadata: {
        title,
        // description,
        // author,
        username,
      },
    },
  } = data

  return (
    <Layout>
      <Flex
        maxWidth="960px"
        padding="1.45rem 1.0875rem 1.45rem"
        alignItems="center"
        justifyContent="center"
        margin="0 auto"
        flexDirection="column"
      >
        <SEO title={title} />
        <Box
          as="h1"
          fontSize="28px"
          textAlign={{ base: "center", lg: "left" }}
          marginLeft={{ lg: "40px" }}
        >
          About Me
        </Box>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          margin={{ base: "0 auto" }}
          alignItems={{ base: "center" }}
        >
          <Box>
            <Box
              as="img"
              borderRadius="full"
              objectFit="cover"
              boxSize={{ base: "180px", lg: "200px" }}
              src={Kshenimg}
              alt={Kshenimg}
            />
            <Box as="h3" fontSize="18px" textAlign="center">
              {username}
            </Box>
          </Box>
          <Flex
            flexDirection="column"
            paddingLeft={{ base: "0rem", lg: "1rem" }}
            fontSize={{ base: "14px", lg: "20px" }}
            position={{ base: "relative", lg: "none" }}
            top={{ base: "0rem", lg: "-2.5rem" }}
          >
            <Flex margin="1" marginTop={{ base: "5px", lg: "55px" }}>
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="Call Sage"
                fontSize="20px"
                icon={<EmailIcon />}
                marginRight="10px"
              />
              <Box as="p" marginTop="5px">
                h73423352@gmail.com
              </Box>
            </Flex>
            <Flex margin="1">
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="Call Sage"
                fontSize="20px"
                icon={<PhoneIcon />}
                marginRight="10px"
              />
              <Box as="p" marginTop="5px">
                0972938185
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <br />
        <Box as="p">
          嗨 !
          我是廖育聖，2020年四月開始學習JavaScript，HTML、CSS，接著九月中旬報名資策會前端工程師班，並且學習程式語言，如JavaScript
          /
          es6、jquery、php7/mysql、react框架...等程式語言與技術，到現階段有了這個個人網站。
          <br />
          <br />
          我在資策會中實作『php小專案』(CRUD)和『旅歷』專案(React.js)，實際的團隊合作協作的經驗與他人溝通的能力，同時有專業的講師的指導，明白了該怎麼做，流程的覽圖，並持續精進自我能力。
          <br />
          <br />
          近期的目標與學習： <br />
          1.實作React-Redux 計算機。
          <br />
          2.持續更新個人網站。
          <br />
          3.接觸不同的框架，例：vue.js。
          <br />
          4.Discord前端社群(分享前後端知識)。
          <br />
          5.實作更多的程式並Demo到個人網站上。
          <br />
          <br />
          我的興趣是攝影，自朋友推坑入手單眼相機後，便開始自主學習及網路社群文章分享，展開數位世代學習攝影，而我選擇風景為主，從p模式到m手動模式，一步一步著手；另外我有經營自己的ig，圖片作品1000+，每日發圖，就像每天coding，健康又美麗。
          <br />
          <br />
          我想，攝影和網頁之間也能有什麼故事？從而親人的推坑之下，決定學習JavaScript做為另一個目標！有許多的知識能夠從網路社群上搜尋並且學習知識！且資訊爆炸的年代，若有影像以及網頁的牽絆，我能夠與他人分享更多資訊並持續開發個人的網站，讓更多人可以看見這個視界，我以這個方向為目標！
        </Box>
      </Flex>
    </Layout>
  )
}

export default SecondPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        username
      }
    }
  }
`
