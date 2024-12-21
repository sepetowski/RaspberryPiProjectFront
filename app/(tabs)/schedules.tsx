import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import { Schedule as ISchedule } from '~/types/types';
import { Schedule } from '~/components/Schedule';
import { API } from '~/constants/data';
import Toast from 'react-native-toast-message';
import isEqual from 'lodash.isequal';

export default function Schedules() {
  const [schedules, setSchedules] = useState<ISchedule[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchSchedules = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${API}/schedule`);
      const newData = response.data;

      if (!isEqual(newData, schedules)) {
        setSchedules(response.data);
        Toast.show({
          type: 'info',
          text1: 'Your schedules list has been refreshed',
        });
      }
    } catch (_) {
      Toast.show({
        type: 'error',
        text1: 'Ops.. Something went wrong while getting schedules.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Reload schedules whenever the tab is focused
  useFocusEffect(
    React.useCallback(() => {
      fetchSchedules();
    }, [])
  );

  const handleDelete = (id: number) => {
    setSchedules((prev) => prev.filter((schedule) => schedule.id !== id));
  };

  return (
    <View className="flex-1 bg-background p-4">
      {isLoading && schedules.length === 0 ? (
        <View className="flex-1 items-center justify-center bg-background">
          <Text className="text-secondary text-center text-lg text-white">Loading...</Text>
        </View>
      ) : schedules.length > 0 ? (
        <ScrollView className="mt-4 bg-background">
          {schedules.map((schedule) => (
            <Schedule key={schedule.id} schedule={schedule} onDelete={handleDelete} />
          ))}
        </ScrollView>
      ) : (
        <View className="flex-1 items-center justify-center bg-background">
          <Text className="text-secondary text-center text-lg text-white">No schedules found.</Text>
        </View>
      )}
    </View>
  );
}
