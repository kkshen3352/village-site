import React from "react"
import { Provider } from "./provider"
import Header from "../header"
import Footer from "../footer"

export default ({ children }) => (
  <div>
    <Header siteTitle="Village" />
    <h1>Posts Layout</h1>
    <Provider>{children}</Provider>
    <Footer />
  </div>
)
