import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import tw from 'twrnc';
import { useForm, Controller } from 'react-hook-form';
import StreakImg from '../Assets/StreakImg';

const GitHubStreakWidget = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [imageUrl, setImageUrl] = useState(null);
  const [isValid, setIsValid] = useState(true);

  const validateUrl = (input) => {
    const urlRegex = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/;
    return urlRegex.test(input);
  };

  const handleInputChange = (onChange) => (input) => {
    setIsValid(validateUrl(input));
    onChange(input);
  };

  const onSubmit = data => {
    if (isValid) {
      console.log(data);
      setImageUrl(data.imageUrl);
    } else {
      Alert.alert('Error', 'Invalid URL. Please enter a valid URL.');
    }
  };

  return (
    <View style={tw`p-4`}>
      <Text style={tw`text-xl font-bold mb-4`}>GitHub Streak Widget</Text>

      <Controller
        control={control}
        rules={{ required: true, validate: validateUrl }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[tw`border p-2 mb-4`, !isValid && tw`border-red-500`]}
            placeholder="Enter a valid URL"
            onBlur={onBlur}
            onChangeText={handleInputChange(onChange)}
            value={value}
            autoCapitalize="none"
            keyboardType="url"
          />
        )}
        name="imageUrl"
        defaultValue=""
      />
      {errors.imageUrl && <Text style={tw`text-red-500 mb-2`}>Please enter a valid URL.</Text>}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      
      <StreakImg ImageUrl={imageUrl} />
    </View>
  );
};

export default GitHubStreakWidget;
