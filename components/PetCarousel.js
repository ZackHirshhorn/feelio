import React, { useEffect, useState } from 'react';
import { View, Image, Dimensions, ActivityIndicator, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const endpoints = {
  "cat": 'https://api.thecatapi.com/v1/images/search?limit=10',
  "dog": 'https://api.thedogapi.com/v1/images/search?limit=10'
}

export default function PetCarousel({petType}) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(endpoints[petType])
        .then(res => res.json())
        .then(data => {
            setImages(data.map(item => item.url));
            setLoading(false);
        })
        .catch(err => {
            console.error('Failed to load cats:', err);
            setLoading(false);
        });
    }, [petType]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <Carousel
      data={images}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item }}
          style={{
            width: width * 0.8,
            height: 200,
            borderRadius: 15,
            alignSelf: 'center',
          }}
          resizeMode="cover"
        />
      )}
      width={width}
      sliderWidth={width}
      itemWidth={width * 0.5}
      loop
    />
  );
}
