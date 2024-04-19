import { Stack } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import ColorPicker, { Panel3, HueSlider } from 'reanimated-color-picker';

import { Button } from '~/components/Button';
import { SelectEffect } from '~/components/SelectEffect';
import { hexToRgb } from '~/lib/convertFromHexToRgb';
import { Rgb } from '~/types/types';

export default function Home() {
  const [currColor, setCurrColor] = useState('#ffff');
  const [rgb, setRgb] = useState<Rgb | null>({ r: 250, b: 250, g: 250 });

  const onSelectColor = ({ hex }: { hex: string }) => {
    setCurrColor(hex);
    setRgb(hexToRgb(hex));
  };
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View className="flex-1 flex-col items-center justify-between bg-background  p-4  ">
        <SelectEffect />
        <ColorPicker style={{ width: '70%' }} value="white" onComplete={onSelectColor}>
          <Panel3 />
          <HueSlider style={{ marginVertical: 20 }} />
        </ColorPicker>

        <Button
          color={currColor}
          textClass={
            rgb && rgb.r >= 200 && rgb.g >= 200 && rgb.b >= 200 ? 'text-black' : 'text-white'
          }
          buttonClass="w-full mt-10"
          onPress={() => {}}
          title={`Save ${currColor}`}
        />
      </View>
    </>
  );
}
