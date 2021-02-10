import { extendTheme } from "@chakra-ui/react"
import { styles, layerStyles, textStyles } from "./styles"

// Foundational style overrides
import borders from "./foundations/borders"
// Component style overrides
import Button from "./components/button"

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
}
const overrides = {
  config,
  styles,
  layerStyles,
  textStyles,
  // Foundational style overrides go here
  borders,
  components: {
    // Components go here
    Button,
  },
}

export default extendTheme(overrides)
