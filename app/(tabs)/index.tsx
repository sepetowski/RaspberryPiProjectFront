/* eslint-disable prettier/prettier */
import axios from 'axios';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import Toast from 'react-native-toast-message';
import ColorPicker, { Panel3, HueSlider } from 'reanimated-color-picker';
import { Button } from '~/components/Button';
import { SelectEffect } from '~/components/SelectEffect';
import { API, EFFECTS_DATA } from '~/constants/data';
import { Effect, Rgb } from '~/types/types';
import hexRgb from 'hex-rgb';

export default function Home() {
  const [currColor, setCurrColor] = useState('#ffff');
  const [rgb, setRgb] = useState<Rgb | null>({ red: 250, green: 250, blue: 250 });
  const [effectValue, setEffectValue] = useState<Effect>(EFFECTS_DATA[0]);
  const [isSavingColor, setIsSavingColor] = useState(false);
  const [isSavingEffect, setIsSavingEffect] = useState(false);

  const onSelectColor = ({ hex }: { hex: string }) => {
    setCurrColor(hex);
    const r = hexRgb(hex);
    const rgb: Rgb = { red: r.red, blue: r.blue, green: r.green };
    setRgb(rgb);
  };

  const onSelectEffect = (effect: Effect) => {
    setEffectValue(effect);
  };

  const onSaveColor = async () => {
    setIsSavingColor(true);
    try {
      await axios.post(`${API}/color`, rgb, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      Toast.show({
        type: 'success',
        text1: 'Color was saved!',
      });
    } catch (error) {
      console.error('Error saving color:', error);
      Toast.show({
        type: 'error',
        text1: 'Ops.. Something went wrong.',
        text2: 'Please try again',
      });
    }
    setIsSavingColor(false);
  };
  const onSaveEffect = async () => {
    setIsSavingEffect(true);
    try {
      await axios.post(`${API}/effect`, Number(effectValue.value), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      Toast.show({
        type: 'success',
        text1: 'Effect was saved!',
      });
    } catch (error) {
      console.error('Error saving effect:', error);
      Toast.show({
        type: 'error',
        text1: 'Ops.. Something went wrong.',
        text2: 'Please try again',
      });
    }
    setIsSavingEffect(false);
  };
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View className="flex-1 flex-col items-center justify-between bg-background  p-4  ">
        <View className="flex w-full flex-row items-center justify-center gap-4">
          <View className="flex-1">
            <SelectEffect
              effects={EFFECTS_DATA}
              selectedEffect={effectValue}
              onSelect={onSelectEffect}
            />
          </View>
          <Button
            disabled={isSavingEffect}
            color="transparent"
            className="bg-red-200"
            textClass="text-primary"
            buttonClass="max-w-48 self-end "
            onPress={onSaveEffect}
            title={`${isSavingEffect ? 'Saving... Please wait.' : `Save ${effectValue.label}`} `}
          />
        </View>
        <ColorPicker style={{ width: '70%' }} value="white" onComplete={onSelectColor}>
          <Panel3 />
          <HueSlider style={{ marginVertical: 20 }} />
        </ColorPicker>

        <Button
          disabled={isSavingColor}
          color={currColor}
          textClass={
            rgb && rgb.red >= 200 && rgb.green >= 200 && rgb.blue >= 200
              ? 'text-black'
              : 'text-white'
          }
          buttonClass="w-full mt-10"
          onPress={onSaveColor}
          title={`${isSavingColor ? 'Saving... Please wait.' : `Save ${currColor}`} `}
        />
      </View>
    </>
  );
}
