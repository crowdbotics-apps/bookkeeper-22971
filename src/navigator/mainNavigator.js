import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList178665Navigator from '../features/ArticleList178665/navigator';
import ArticleList178664Navigator from '../features/ArticleList178664/navigator';
import ArticleList178663Navigator from '../features/ArticleList178663/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList178665: { screen: ArticleList178665Navigator },
ArticleList178664: { screen: ArticleList178664Navigator },
ArticleList178663: { screen: ArticleList178663Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
