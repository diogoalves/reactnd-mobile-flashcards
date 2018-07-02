import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const REMINDER_KEY = 'reactnd-mobile-flashcards-reminder';

export const clear = async () => {
  await AsyncStorage.removeItem(REMINDER_KEY);
  await Notifications.cancelAllScheduledNotificationsAsync();
};

const createReminder = () => {
  return {
    title: 'Time to study!',
    body: '👋 remember reviewing your decks today!',
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },
  };
};

const createReminderTime = () => {
  let time = new Date();
  // time.setMinutes(time.getMinutes()+1) // to test
  time.setDate(time.getDate() + 1);
  time.setHours(7);
  time.setMinutes(0);
  time.setSeconds(0);
  return {
    time: time,
    repeat: 'day',
  };
};

export const set = async () => {
  const alreadySet = await AsyncStorage.getItem(REMINDER_KEY);
  if (!alreadySet) {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status === 'granted') {
      await Notifications.cancelAllScheduledNotificationsAsync();
      await Notifications.scheduleLocalNotificationAsync(
        createReminder(),
        createReminderTime()
      );
      await AsyncStorage.setItem(REMINDER_KEY, JSON.stringify(true));
    }
  }
};

export const clearAndSet = async () => {
  await clear();
  await set();
};

export default {
  clear,
  set,
  clearAndSet,
};
