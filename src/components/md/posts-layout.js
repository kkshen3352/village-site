import React from "react"
import { Provider } from "./provider"
import Header from "../header"
import Footer from "../footer"

export default ({ children }) => (
  <>
    <Header siteTitle="Village" />
    <Provider>{children}</Provider>
    <Footer />
  </>
)
