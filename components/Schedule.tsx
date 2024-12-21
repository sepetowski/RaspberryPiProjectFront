import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Using MaterialIcons for the trash icon
import { Schedule as ISchedule } from '~/types/types';
import axios from 'axios';
import { API, DAYS } from '~/constants/data';
import Toast from 'react-native-toast-message';

interface ScheduleProps {
  schedule: ISchedule;
  onDelete: (id: number) => void; // Callback to refresh the list
}

export const Schedule = ({ schedule, onDelete }: ScheduleProps) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`${API}/schedule/${schedule.id}`);
      onDelete(schedule.id);
    } catch (_) {
      Toast.show({
        type: 'error',
        text1: 'Ops.. Something went wrong while deleting schedule.',
        text2: 'Please try again',
      });
    }
  };

  return (
    <View className="mb-4 flex flex-row items-center justify-between rounded-lg border  bg-background bg-white/10 p-4">
      <View>
        <Text className="text-3xl font-bold text-primary">{schedule.name}</Text>
        <Text className="text-lg text-primary">
          {schedule.day !== null ? `Day: ${DAYS[schedule.day]?.label}` : 'Every Day'}
        </Text>
        <Text className="text-md text-white">
          Time: {schedule.hour}:{schedule.minute.toString().padStart(2, '0')}:
          {schedule.second.toString().padStart(2, '0')}
        </Text>
        <Text className="text-md text-white">
          Action: {schedule.action === 1 ? 'Turn On' : 'Turn Off'}
        </Text>
      </View>
      <TouchableOpacity
        className="rounded-lg bg-red-500 p-2"
        onPress={handleDelete}
        accessibilityLabel="Delete schedule">
        <Icon name="delete" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
};
