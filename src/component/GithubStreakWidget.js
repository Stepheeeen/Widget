// src/components/GitHubStreakWidget.js
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import tailwind from 'tailwind-rn';
import { useForm, Controller } from 'react-hook-form';

const GitHubStreakWidget = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    // Handle form submission
  };

  return (
    <View style={tailwind('p-4')}>
      <Text style={tailwind('text-xl font-bold mb-4')}>GitHub Streak Widget</Text>

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={tailwind('border p-2 mb-4')}
            placeholder="Enter image URL"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="imageUrl"
        defaultValue=""
      /> 
      {errors.imageUrl && <Text style={tailwind('text-red-500')}>This field is required.</Text>}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default GitHubStreakWidget;
