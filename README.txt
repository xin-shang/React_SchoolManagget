Initial Installation:

- Firstly, Node JS needs to be install in order to set up React and its install components. 
https://nodejs.org/en/download/ 
Follow the link and install the most current Node JS for the operating system you are on. 


Expo Installation

 - Install Expo Go on your smartphone

- Once Node JS has install. Open the Project folder in Visual Studio Code. 
- Open the terminal and run the following calls:

: npm install -g expo-cli 
(This is the base script for the project to be run through Expo)

Module Installation

: npm install @react-navigation/native 
: npm install @react-navigation/native-stack 
(These allow the use of a stack for changing screens quickly)

: npm install react-native-gesture-handler@~2.2.1 
(This allows for swipes to be recognised)

: npm install react-native-screens react-native-safe-area-context
: npm install react-native-masked-view/masked-view
(These are security features)

: npm install @react-navigation/bottom-tabs --save 
(This is to use tabs down the bottom of the screen for quick navigation)

: npm install react-native-vector-icons --save
(This allows for customisable icons - This build uses the Community Icons)

: npm install accordion-collapse-react-native
(This allows for drop down menus)

: npm install expo-constants
(This allows for standardised constants that can be used freely)

: npm install react-native-countdown-circle-timer
: npm install react-native-sound --save
(These are for the study timer - Sounds can also be used elsewhere)

: npm install react-native-dialog 
(This allows for dialogue boxes to appear)

: npm install react-native-calendars
: npm install react-native-paper
(This is for the calendar component)

Once all modules are installed, save all files and test to see if it works 
by using the command: 
npm start

After it bundles (can take 5 seconds to a minute depending on your computer speed), 
a QR code should appear on screen. 

Use your phone camera and highlight over it, Expo Go should pick it up and open it. 
Once it fully bundles, you will have access  to the app. (Closing the application or 
closing Visual Studio will terminate the connection)

Remember! In order for Expo Go to work successfully, your phone and your computer MUST
be on the same network, otherwise the bundler will not be able to sync the two 
devices together. 

