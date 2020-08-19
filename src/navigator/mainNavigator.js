import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings91941Navigator from '../features/Settings91941/navigator';
import Settings91926Navigator from '../features/Settings91926/navigator';
import NotificationList91925Navigator from '../features/NotificationList91925/navigator';
import Maps91924Navigator from '../features/Maps91924/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings91941: { screen: Settings91941Navigator },
Settings91926: { screen: Settings91926Navigator },
NotificationList91925: { screen: NotificationList91925Navigator },
Maps91924: { screen: Maps91924Navigator },

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
