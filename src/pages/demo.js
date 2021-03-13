import React from "react"
// import { Link } from "gatsby"
import { Box } from "@chakra-ui/react"
import Layout from "../components/layout"
import Calculator from "../components/calculator"
// import ReduxCalculator from "../components/redux-calculator"

// import TodoApp from "../components/test"
// import { Provider } from "react-redux"
// import { createStore } from "redux"

// let store = createStore(TodoApp)

const SecondPage = () => {
  return (
    <Layout>
      {/* <Provider store={store}>
        <TodoApp />
      </Provider> */}
      <Box as="h3">
        計算機(React-class-Calculator)
        <Calculator />
      </Box>
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
