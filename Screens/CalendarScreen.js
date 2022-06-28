import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text,
} from 'react-native';
import { Calendar, Agenda } from 'react-native-calendars';

import { Colors, Fonts } from '../assets/fonts/Fonts';

/*

Pre-Built component from online library. This incorporates the fonts folder and colors folder.

Refer to https://www.npmjs.com/package/react-native-calendars
for in depth documentation regarding each element.

*/

export default class CalendarScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  renderItem(item) {
    const labels = item.labels && item.labels.map(label => (
      <View
        key={`label-${label}`}
        style={{
          padding: 5,
          backgroundColor: label === 'Urgent' ? Colors.primary : Colors.secondary,
          borderRadius: 3,
        }}
      >
        <Text style={{ color: 'white' }}>{label}</Text>
      </View>
    ));

    return (
      <View style={styles.item}>
        <View>
          <Text style={{ color: '#48506B', fontFamily: Fonts.primaryRegular, marginBottom: 10 }}>{item.name}</Text>
          <Text style={{ color: '#9B9B9B', fontFamily: Fonts.primaryRegular }}>{item.time}</Text>
        </View>

        <View styleName="horizontal h-start">
          {labels}
        </View>
      </View>
    );
  }

  render() {
    return (
      <><Agenda
        items={this.props.items}
        loadItemsForMonth={this.props.loadItems}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        theme={{
          dotColor: 'red',
          selectedDayBackgroundColor: 'yellow',
          agendaDayTextColor: 'green',
          agendaDayNumColor: 'red',
          agendaTodayColor: '#4F44B6',
          backgroundColor: '#F1F1F8',
        }} />
        <Calendar
          minDate={'2022-01-01'}
          maxDate={'2022-12-31'}
          firstDay={1}
          enableSwipeMonths={true}

          style={{
            borderWidth: 1,
            borderColor: 'gray',
            height: 350
          }}
          theme={{
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }} /></>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 10,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});

