import React from "react"
import {
  Link,
  Box,
  Flex,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react"
import Layout from "../components/layout"
import { SizeEnums } from "../lib/style-utils"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import App from "../components/redux-calc/index"
import Hairmap from "./projects/"

function SecondPageQuert({
  title = "React-Redux 實現計算機",
  date = "2021-03-31",
  main = [
    { text: "紀錄計算過程", ation: "顯示計算過程" },
    { text: "四則運算", ation: "四則運算" },
    { text: "餘數", ation: "餘數計算" },
    { text: "平方", ation: "平方計算" },
    { text: "BACK『b』", ation: "按鍵退格" },
    { text: "CLEAR『C』", ation: "清除計算" },
    { text: "等於『=』", ation: "四捨五入後的近似值" },
    {
      text: "Middleware",
      ation: (
        <Box>
          當每一次按按鈕(action)被 dispatch
          的時候，會計算出新的state並儲存下來。 state
          無法自己改變，它只能因應特定 action的結果而改變。
          <br />
          F12開發者模式可觀看
        </Box>
      ),
    },
    {
      text: "github",
      ation: (
        <Link
          href={`https://github.com/kkshen3352/kkshen-site/tree/develop/src/components/redux-calc`}
          style={{ color: "teal" }}
          isExternal
        >
          點我觀看程式碼
          <ExternalLinkIcon mx="2px" />
        </Link>
      ),
    },
  ],
}) {
  const { SMALL, LARGE, EXTRALARGE, XXL } = SizeEnums

  return (
    <Layout>
      <Tabs>
        <TabList>
          <Tab>計算機</Tab>
          <Tab>html/css3切版</Tab>
          {/* <Tab>Three</Tab> */}
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box as="h6">
              <Flex display={{ base: "column", lg: "flex" }}>
                <Flex flexDirection="column" alignItems="center">
                  <Box as="h1" fontSize="32px" textShadow="#FC0 1px 0 10px">
                    Redux Calculator
                  </Box>
                  <App />
                </Flex>
                <Box
                  maxW={XXL}
                  borderWidth="1px"
                  borderRadius={LARGE}
                  overflow="hidden"
                  margin="5"
                >
                  <Box padding="2rem">
                    <Box
                      as="h1"
                      fontWeight="semibold"
                      fontSize={{ base: `${LARGE}`, lg: `${EXTRALARGE}` }}
                    >
                      {title}
                    </Box>
                    <Box
                      margin="5px"
                      marginTop="1"
                      fontSize={{ base: `${SMALL}`, lg: `${LARGE}` }}
                    >
                      {main.map(({ text, ation }, i) => (
                        <Box key={i}>
                          <Flex
                            margin="5px"
                            paddingTop="5px"
                            fontSize={{ base: "14px", lg: "18px" }}
                          >
                            <Box
                              fontWeight="semibold"
                              width={{ base: "200px", lg: "150px" }}
                              marginRight={{ base: "5px", lg: "15px" }}
                            >
                              ● {text}
                            </Box>
                            <Box width="330px">{ation}</Box>
                          </Flex>
                        </Box>
                      ))}
                    </Box>
                    <Box
                      display="flex"
                      margintop="10"
                      alignItems="center"
                      position="relative"
                    >
                      <Box
                        as="span"
                        fontSize="sm"
                        position="absolute"
                        paddingTop="40px"
                        buttom="-10px"
                        right="0"
                      >
                        Latest Updated:
                        {date}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box as="h6">
              <Hairmap />
            </Box>
          </TabPanel>
          {/* <TabPanel>
            <p>three!</p>
          </TabPanel> */}
        </TabPanels>
      </Tabs>

      {/* <Link to="/demo/projects"></Link> */}
    </Layout>
  )
}

export default SecondPageQuert
