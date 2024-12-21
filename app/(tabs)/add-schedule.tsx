/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { View, Text, Switch, TextInput } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import { Stack } from 'expo-router';
import { Button } from '~/components/Button';
import { API, DAYS } from '~/constants/data';
import { SelectFromDropdown } from '~/components/SelectFromDropdown';
import { Day } from '~/types/types';

export default function AddSchedule() {
  const [isSaving, setIsSaving] = useState(false);
  const [selectedTimeOnly, setSelectedTimeOnly] = useState<Date | null>(null);
  const [scheduleName, setScheduleName] = useState<string>('New Schedule');
  const [isEnabled, setIsEnabled] = useState(false);
  const [isDayWeekActive, setIsDayWeekActive] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const [day, setDay] = useState<Day>(DAYS[0]);

  const onSelectDay = (day: Day) => {
    setDay(day);
  };

  const toggleEnabled = () => setIsEnabled((previousState) => !previousState);

  const toggleIsDayWeekActive = () => setIsDayWeekActive((previousState) => !previousState);

  const handleTimeConfirm = (time: Date) => {
    setSelectedTimeOnly(time);
    setTimePickerVisibility(false);
  };

  const reset = () => {
    setSelectedTimeOnly(null);
    setIsEnabled(false);
    setIsDayWeekActive(false);
    setScheduleName('');
    setDay(DAYS[0]);
  };

  const saveSchedule = async () => {
    if (!selectedTimeOnly) {
      Toast.show({
        type: 'error',
        text1: 'Please select a time',
      });
      return;
    }

    if (!scheduleName.trim()) {
      Toast.show({
        type: 'error',
        text1: 'Please enter a schedule name',
      });
      return;
    }

    setIsSaving(true);
    try {
      await axios.post(
        `${API}/schedule`,
        {
          name: scheduleName.trim(),
          hour: selectedTimeOnly.getHours(),
          minute: selectedTimeOnly.getMinutes(),
          second: 0,
          day: isDayWeekActive ? Number(day.value) : null,
          action: isEnabled ? 1 : 0,
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      Toast.show({
        type: 'success',
        text1: 'Schedule was saved!',
      });
    } catch (_) {
      Toast.show({
        type: 'error',
        text1: 'Ops.. Something went wrong while saving schedule.',
        text2: 'Please try again',
      });
    }

    setIsSaving(false);
    reset();
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Add new Schedule' }} />
      <View className="flex-1 gap-4 bg-background p-4">
        <View>
          <Text className="mb-2 text-lg text-primary">Schedule Name</Text>
          <TextInput
            className="mb-4 w-full text-wrap rounded-lg border border-white/10 bg-background p-3 text-white placeholder:text-white"
            placeholder="Enter schedule name"
            value={scheduleName}
            onChangeText={setScheduleName}
          />
        </View>
        <View>
          <Text className="mb-2 text-lg text-primary">Time</Text>
          <Button
            textClass="text-white"
            buttonClass="w-full"
            onPress={() => setTimePickerVisibility(true)}
            title={
              selectedTimeOnly
                ? `${selectedTimeOnly.getHours()}:${selectedTimeOnly
                    .getMinutes()
                    .toString()
                    .padStart(2, '0')}`
                : 'Pick Time'
            }
          />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleTimeConfirm}
            onCancel={() => setTimePickerVisibility(false)}
          />
        </View>

        <View className="flex flex-col items-center justify-between">
          <View className="flex w-full flex-row items-center justify-between">
            <Text className="text-lg text-primary">
              {isDayWeekActive ? `Reapy only ${day.label}` : 'Repeat each day'}
            </Text>
            <Switch
              value={isDayWeekActive}
              onValueChange={toggleIsDayWeekActive}
              thumbColor={isEnabled ? 'white' : 'gray'}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
            />
          </View>
          {isDayWeekActive && (
            <View className="flex w-full items-center justify-between">
              <SelectFromDropdown items={DAYS} selectedItem={day} onSelect={onSelectDay} />
            </View>
          )}
        </View>

        <View className="flex flex-row items-center justify-between">
          <Text className="text-lg text-primary">
            {isEnabled ? 'Turn On Device' : 'Turn Off Device'}
          </Text>
          <Switch
            value={isEnabled}
            onValueChange={toggleEnabled}
            thumbColor={isEnabled ? 'white' : 'gray'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>

        <Button
          textClass="text-white text-center"
          buttonClass="w-full mt-6"
          disabled={isSaving || !selectedTimeOnly}
          onPress={saveSchedule}
          title={
            isSaving
              ? 'Saving...'
              : selectedTimeOnly
                ? `Save Schedule: ${isEnabled ? 'Turn On' : 'Turn Off'} ${
                    isDayWeekActive
                      ? `on ${day.label} at ${selectedTimeOnly.getHours()}:${selectedTimeOnly
                          .getMinutes()
                          .toString()
                          .padStart(2, '0')}`
                      : `daily at ${selectedTimeOnly.getHours()}:${selectedTimeOnly
                          .getMinutes()
                          .toString()
                          .padStart(2, '0')}`
                  }`
                : 'Save Schedule: Please select a time'
          }
        />
      </View>
    </>
  );
}
