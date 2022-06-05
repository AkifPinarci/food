import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import Check from "./src/screens/Check";
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Check: Check,
  },
  {
    initialRouteName: "Search",

    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
