import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Dimensions, FlatList, Animated, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { colors } from '@/styles/colors';

const { width } = Dimensions.get('window');

interface BannerItem {
  id: string;
  title: string;
  imageUrl: string;
}

const banners: BannerItem[] = [
  { id: '01', title: '', imageUrl: require('../../assets/images/bannerImage1.png') },
  { id: '02', title: '', imageUrl: require('../../assets/images/bannerImage2.png') },
  { id: '03', title: '', imageUrl: require('../../assets/images/bannerImage1.png') },
];

interface CarouselProps {
    showNavigationButton?: boolean;  // Show Next button (default true)
    enableNavigationButton?: boolean;  // Enable/Disable Next button (default true)
    showDots?: boolean;  // Show pagination dots (default true)
    enableDots?: boolean;  // Enable/Disable dots (default true)
    dotsInsideImage?: boolean;
    autoPlay?: boolean;
    autoPlayInterval?: number;
  }

const Carousel: React.FC<CarouselProps> = ({ 
    showNavigationButton = true,
    enableNavigationButton = true,
    showDots = true,
    enableDots = true,
    dotsInsideImage = false,
    autoPlay = true,
    autoPlayInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);

  // Auto scroll logic
  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % banners.length;
        setCurrentIndex(nextIndex);
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      }, autoPlayInterval);

      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [autoPlay, autoPlayInterval, currentIndex]);

  // Scroll to next item
  const handleNext = () => {
    if (enableNavigationButton) {
      const nextIndex = (currentIndex + 1) % banners.length;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    }
  };
   // Adjust the scroll position when momentum ends
   const onMomentumScrollEnd = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / (width * 0.8));
    setCurrentIndex(index);
  };


  // Render carousel item
  const renderItem = ({ item }: { item: BannerItem }) => (
    <View style={styles.slide}>
      <Image source={item.imageUrl} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  // Interpolating the scroll position for animations
  const scale = scrollX.interpolate({
    inputRange: [-width, 0, width],
    outputRange: [0.9, 1, 0.9],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      {/* Animated FlatList */}
      <Animated.FlatList
        ref={flatListRef}
        data={banners}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        getItemLayout={(data, index) => ({
          length: width * 0.8,
          offset: width * 0.8 * index,
          index,
        })}
        onMomentumScrollEnd={onMomentumScrollEnd}
      />

      {/* Navigation Button */}
      {showNavigationButton && (
        <TouchableOpacity
          style={[styles.button, { opacity: enableNavigationButton ? 1 : 0.5 }]}
          onPress={handleNext}
          disabled={!enableNavigationButton}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      )}

      {/* Pagination Dots */}
      {showDots && (
        <View style={[styles.pagination, dotsInsideImage && styles.dotsInsideImage]}>
          {banners.map((_, index) => {
            const opacity = scrollX.interpolate({
              inputRange: [
                (index - 1) * width,
                index * width,
                (index + 1) * width,
              ],
              outputRange: [0.5, 1, 0.5],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                key={index}
                style={[
                  styles.dot,
                  { opacity, backgroundColor: enableDots ? colors.white : colors.white },
                ]}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};

export default Carousel;