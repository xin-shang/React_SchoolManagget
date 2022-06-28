import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';

/*
Converts the time into a string to be read by the Calendar 
*/

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

/*

Initial navigation opening and const variable setting of array items to store
marked dates.

Load items function takes the day as a parameter and outputs all days that align
with it. The formula converts the timestamp into a readable format by convert it. 
The height setting is to allow ample viewing height without squashing the text
in the box.

New items takes the list array of items and creates them as new ones. It then
calls on set items to add them permantely into the calendar.

Render item is the view port. It renders the calendar as a normal gregorian calendar by
month. The touchable opacity allows the dates to be clicked and thus load the items associated with it. 

All documentation for the calendar screen and agenda screen can be found here:
https://www.npmjs.com/package/react-native-calendars

*/

const CalendarNick = ({navigation}) => {

  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };9

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              
              <Text>{item.name}</Text>
              
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  /*

The return statement that takes the agenda items are adds them to the calendar. 
The array of items each require a date in YYYY-MM-DD and a name. You can also customise each
with colours and stylings by extending entry with a comma. 

The items are loaded for the month and they are rendered to the screen. 

NOTE: 
Due to the way it works, it is a slow loading process. Being not 100% efficient
means it loads the ENTIRE calendar as a list. Which takes a large chunk of memory.
Currently, this is the easiest way to run the calendar. Ideally, deleting all dates that
have passed can help solve this issue AND ensuring that the calendar doesn't venture
too far into the future. 

*/

  return (
    <View style={{flex: 1}}>
      <Agenda
        items = {{

          '2022-06-09': [{ name: 'Presentation Day'}],
          '2022-06-10': [{ name: 'Big Data Assignment Due'}],
          '2022-06-24': [{ name: 'Design Patterns Exam'}],
          '2022-12-25': [{ name: 'Christmas Day'}]

        }
          
        }
        //items={items}
        loadItemsForMonth={loadItems}
        selected={'2022-06-06'}
        renderItem={renderItem}
        markedDates={{
          '2022-10-31': {selected:true, marked:true},
          '2022-12-31': {marked:true},
          '2022-04-25': {marked:true},
          '2022-01-26': {marked: true}
        }}
      />
    </View>
  );
};


export default CalendarNick;