import React from "react"
import { graphql } from "gatsby"
import { Box } from "@chakra-ui/react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data }) => {
  const {
    site: {
      siteMetadata: { title, description, author, username },
    },
  } = data

  return (
    <Layout>
      <SEO title={title} />
      <Box as="h1" fontSize="28px">About Me</Box>
      <Box as="h3" fontSize="18px">Author: {username}</Box>
      <br />
      <Box as="p">
        我是廖育聖，2020年四月開始學習JavaScript，HTML、CSS，接著九月中旬報名資策會前端工程師班，並且學習es6、jquery、php7/mysql、react框架...等。
        <br />
        <br />
        我在資策會實作php小專案中和履歷react框架專案，實際團隊合作協作的經驗與他人溝通的能力，同時有專業的講師的指導，明白了該怎麼做，流程的覽圖，並持續精進自我能力。
        <br />
        <br />
        我的興趣是攝影，自朋友推坑入手單眼相機後，便開始自主學習和google及數位世代學習攝影，而我選擇風景為主，從p模式到m手動模式，一步一步。
        另外我有經營自己的ig，圖片作品1000+，每日發圖，就像每天coding，健康又美麗。
        <br />
        <br />
        我想，攝影和網頁之間也能有什麼故事？從而親人的推坑之下，決定學習JavaScript
        做為另一個目標！有許多的知識能夠從網路上搜尋並且學習知識！且資訊爆炸的年代，若有影像以及網頁的牽絆，我能夠與他人分享更多資訊並開發自己的網站，讓更多人可以看見這個視界，我以這個方向為目標！
      </Box>
      <br />
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
