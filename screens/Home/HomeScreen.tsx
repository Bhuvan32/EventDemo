import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import EventDetails from './components/EventDetails/EventDetails';
import CarouselBanner from '@/components/CarouselBanner/CarouselBanner';
import QuickActionCard from '@/components/QuickActionCard/QuickActionCard';
import HorizontalScrollCardSection from '@/components/HorizontalScrollCardSection/HorizontalScrollCardSection';
import Card from '@/components/Card/Card';
import Modal from '@/components/Modal/Modal';

const HomeScreen: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const quickActions = [
    { icon: 'networking', text: 'Networking' },
    { icon: 'gamification', text: 'Gamification' },
    { icon: 'image', text: 'Gallery' },
    { icon: 'speaker', text: 'Speakers' },
    { icon: 'exhibitor', text: 'Exhibitors' },
    { icon: 'partner', text: 'Partners' },
    { icon: 'floorMap', text: 'Floor Map' },
    { icon: 'annotation', text: 'Support' },
  ];

  const sponsors = [
    { image: require('../../assets/images/canon.png'), title: 'Canon' },
    { image: require('../../assets/images/huawei.png'), title: 'HUAWEI' },
    { image: require('../../assets/images/mcdonalds.png'), title: 'McDonalds' },
    { image: require('../../assets/images/canon.png'), title: 'Canon' },
    { image: require('../../assets/images/huawei.png'), title: 'HUAWEI' },
    { image: require('../../assets/images/mcdonalds.png'), title: 'McDonalds' },
  ];
  
  const exhibitors = [
    {
      image: require('../../assets/images/airtel.png'),
      title: 'Bharti Airtel',
      subtitle: 'Booth 045',
    },
    {
      image: require('../../assets/images/jio.png'),
      title: 'Reliance Jio',
      subtitle: 'Booth 089',
    },
    {
      image: require('../../assets/images/airtel.png'),
      title: 'Bharti Airtel',
      subtitle: 'Booth 045',
    },
    {
      image: require('../../assets/images/jio.png'),
      title: 'Reliance Jio',
      subtitle: 'Booth 089',
    },

  ];


  return (
    <View style={styles.container}>
      <EventDetails />
      <CarouselBanner
        showNavigationButton={false}  // Show Next Button
        enableNavigationButton={false} // Enable Next Button
        showDots={true}  // Show Dots
        enableDots={true} // Enable Dots
        dotsInsideImage={true}
        autoPlay={true}
        autoPlayInterval={3000}
      />
      <QuickActionCard title="Quick Actions" cardContent={quickActions} />
      <HorizontalScrollCardSection
        title="Sponsors"
        data={sponsors}
        onActionPress={() => setModalVisible(true)}
        renderItem={({ item }) => <Card image={item.image} title={item.title} width={150} onPress={() => setModalVisible(true)}  />}
      />
      <HorizontalScrollCardSection
        title="Exhibitors"
        data={exhibitors}
        onActionPress={() => setModalVisible(true)}
        renderItem={({ item }) => <Card image={item.image} title={item.title} width={180} subtitle={item.subtitle} onPress={() => setModalVisible(true)} />}
      />


      {/* Modal */}
      <Modal isModalVisible={isModalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default HomeScreen;