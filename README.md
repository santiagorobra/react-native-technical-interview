# React Native Technical Interview

Wolox's base project for the React Native's team technical interview

### Objective

Build an app to display a list of books retrieved from the mocked API.  
You must follow the instructions that have been shared to you to solve the exercise.

### Good luck!

## <a name="topic-about"></a> About

This project is maintained and it was written by [Wolox](http://www.wolox.com.ar).

![Wolox](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png)

## <a name="topic-license"></a> License

This project is available under the MIT [license](https://raw.githubusercontent.com/Wolox/wolmo-core-android/master/LICENSE.md).

    Copyright (c) Wolox S.A

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.


## My installations and modifications

## Active Hermes
URL: https://reactnative.dev/docs/hermes#docsNav

Edit your android/app/build.gradle file and make the change illustrated below

 project.ext.react = [
      entryFile: "index.js",
-     enableHermes: false  // clean and rebuild if changing
+     enableHermes: true  // clean and rebuild if changing
  ]

## Redux
URL: https://es.redux.js.org/
NPM: npm i -S redux

## React Redux
URL: https://react-redux.js.org/introduction/quick-start
NPM: npm install react-redux

## Async Storage
URL: https://react-native-community.github.io/async-storage/
NPM: npm i @react-native-community/async-storage
IOS: npx pod-install ios

## React Native Elements
URL: https://reactnativeelements.com/docs
NPM: npm i react-native-elements --save 
NPM: npm i --save react-native-vector-icons
IOS: npx pod-install ios

ANDROID
add in android/app/build.gradle
project.ext.react = [
    enableHermes: true,  // clean and rebuild if changing
]

project.ext.vectoricons = [
    iconFontNames: [ 'Zocial.ttf', 'Octicons.ttf', 'SimpleLineIcons.ttf', 'MaterialCommunityIcons.ttf', 'MaterialIcons.ttf', 'Ionicons.ttf', 'Foundation.ttf', 'FontAwesome5_Solid.ttf', 'FontAwesome5_Regular.ttf', 'FontAwesome5_Brands.ttf', 'FontAwesome.ttf', 'Feather.ttf', 'EvilIcons.ttf', 'AntDesign.ttf', 'Entypo.ttf' ]
]
apply from: "../../node_modules/react-native/react.gradle"
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

IOS
add in info.plist
<key>UIAppFonts</key>
	<array>
		<string>AntDesign.ttf</string>
		<string>Entypo.ttf</string>
		<string>EvilIcons.ttf</string>
		<string>Feather.ttf</string>
		<string>FontAwesome.ttf</string>
		<string>FontAwesome5_Brands.ttf</string>
		<string>FontAwesome5_Regular.ttf</string>
		<string>FontAwesome5_Solid.ttf</string>
		<string>Foundation.ttf</string>
		<string>Ionicons.ttf</string>
		<string>MaterialIcons.ttf</string>
		<string>MaterialCommunityIcons.ttf</string>
		<string>SimpleLineIcons.ttf</string>
		<string>Octicons.ttf</string>
		<string>Zocial.ttf</string>
	</array>
	<key>UILaunchStoryboardName</key>
paste lines above UILaunchStoryboardName

## React Native Navigation
URL: https://reactnavigation.org/docs/getting-started
NPM: npm i @react-navigation/native 
NPM: npm i react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
IOS: npx pod-install ios

Example App.js
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}

## StackNavigation
NPM: npm install @react-navigation/stack

## TabsNavigation
NPM: npm install @react-navigation/bottom-tabs

## React Native dropdown picker
URL: https://github.com/hossein-zare/react-native-dropdown-picker
NPM: npm install react-native-dropdown-picker --save
IOS: npx pod-install ios

## Lodash
URL: https://lodash.com/
NPM: npm i --save lodash