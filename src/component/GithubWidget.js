import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import tw from 'twrnc';
import { useForm, Controller } from 'react-hook-form';

const GitHubStreakWidget = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [imageUrl, setImageUrl] = useState(null);

  const onSubmit = data => {
    console.log(data);
    setImageUrl(data.imageUrl);
  };

  return (
    <View style={tw`p-4`}>
      <Text style={tw`text-xl font-bold mb-4`}>GitHub Streak Widget</Text>

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={tw`border p-2 mb-4`}
            placeholder="Enter Github Streak URL"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="imageUrl"
        defaultValue=""
      />
      {errors.imageUrl && <Text style={tw`text-red-500`}>This field is required.</Text>}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />

      {imageUrl && ( 
        <Image
          source={{ uri: imageUrl }}
          style={tw `h-[200px] w-[200px] shadow-lg`}
        />
      )}

    </View>
  );
};

export default GitHubStreakWidget;
