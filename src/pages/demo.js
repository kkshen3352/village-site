import React from "react"
// import { Link } from "gatsby"
import { Box, Flex } from "@chakra-ui/react"
import Layout from "../components/layout"
// import Calculator from "../components/calculator"
//
// import Counter from "../components/counter"
// import { createStore } from "redux"
// import counterReducer from "../components/counter/reducers"
// const store2 = createStore(counterReducer)
//
import App from "../components/redux-calc/index"

const SecondPage = () => {
  return (
    <Layout>
      {/* <Box as="h1" fontSize="32px">
        Redux Counter
      </Box>
      <Counter
        value={store2.getState()}
        onIncrement={() => store2.dispatch({ type: "INCREMENT" })}
        onDecrement={() => store2.dispatch({ type: "DECREMENT" })}
      /> */}
      <Flex flexDirection="column" alignItems="center">
        <Box as="h1" fontSize="32px" textShadow="#FC0 1px 0 10px">
          Redux Calculator
        </Box>
        <App />
      </Flex>
      {/* <Box as="h3">
        計算機(Redux-React-hooks-Calculator)
        <ReduxCalculator />
      </Box> */}
      {/* <Flex>
        <Link to="/page-2/">Go to page 2</Link>
      </Flex>
      <Flex>
        <Link to="/geo">Go to geo page</Link>
      </Flex>
      <Flex>
        <Link to="/rect">Go to rect page</Link>
      </Flex>
      <Flex>
        <Link to="/rect-gl">Go to rect GL page</Link>
      </Flex>
      <Flex>
        <Link to="/ray-tracing">Go to ray tracing page</Link>
      </Flex>
      <Link to="/">Go back to the homepage</Link> */}
    </Layout>
  )
}

export default SecondPage
