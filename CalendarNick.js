import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';


const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

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