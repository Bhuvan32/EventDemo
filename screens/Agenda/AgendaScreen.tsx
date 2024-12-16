import React, { useState } from 'react';
import { View, Text } from 'react-native';
import AgendaTabs from '@/components/AgendaTabs/AgendaTabs';
import SearchAndFilter from '@/components/SearchAndFilter/SearchAndFilter';
import FilterTabs from '@/components/FilterTabs/FilterTabs';
import AgendaTimeline from '@/components/AgendaTimeline/AgendaTimeline';
import Modal from '@/components/Modal/Modal';
import styles from './styles';

const AgendaScreen: React.FC = () => {
  // States
  const [selectedDay, setSelectedDay] = useState('Day1'); // Default to Day 1
  const [selectedFilter, setSelectedFilter] = useState('All Sessions'); // Default filter
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setModalVisible] = useState(false); // State for modal visibility
  
  // Mock Data for Agenda (separated by day)
  const agendaData = {
    Day1: [
      { 
        id: '1', 
        time: '9:00 AM', 
        title: 'Opening Keynote', 
        duration: '45 mins', 
        hall: 'Hall A', 
        bookmarked: true, 
        tags: ['Keynote'], 
        speakers: [
          { id: '1', name: 'John Doe', image: require('@/assets/images/speaker1.png') },
          { id: '2', name: 'Jane Smith', image: require('@/assets/images/speaker2.png') },
        ] 
      },
      { 
        id: '2', 
        time: '10:30 AM', 
        title: 'Workshop on React Native', 
        duration: '1 hr', 
        hall: 'Hall B', 
        bookmarked: false, 
        tags: ['React', 'Workshop'], 
        speakers: [{ id: '2', name: 'Jane Smith', image: require('@/assets/images/speaker2.png') }] 
      },
    ],
    Day2: [
      { 
        id: '3', 
        time: '11:00 AM', 
        title: 'Advanced JavaScript Techniques', 
        duration: '1 hr', 
        hall: 'Hall C', 
        bookmarked: true, 
        tags: ['JavaScript', 'Tech Talk'], 
        speakers: [{ id: '3', name: 'Emily Brown', image: require('@/assets/images/speaker1.png') }] 
      },
      { 
        id: '4', 
        time: '2:00 PM', 
        title: 'UI/UX Design Best Practices', 
        duration: '1 hr', 
        hall: 'Hall A', 
        bookmarked: false, 
        tags: ['UI/UX', 'Workshop'], 
        speakers: [{ id: '4', name: 'Michael Lee', image: require('@/assets/images/speaker2.png') }] 
      },
    ],
    Day3: [
      { 
        id: '5', 
        time: '11:00 AM', 
        title: 'Advanced JavaScript Techniques', 
        duration: '1 hr', 
        hall: 'Hall C', 
        bookmarked: true, 
        tags: ['JavaScript', 'Tech Talk'], 
        speakers: [{ id: '3', name: 'Emily Brown', image: require('@/assets/images/speaker1.png') }] 
      },
    ],
  };

  // Map of event dates for each day
  const dateMap = {
    Day1: '2024-09-30',
    Day2: '2024-10-01',
  };

  // Helper function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options); // "Sun Sep 30"
  };

  const availableTabs = Object.keys(agendaData);  

  const filteredAgenda = selectedFilter === 'All Sessions'
    ? agendaData[selectedDay as keyof typeof agendaData]
    : selectedFilter === 'Bookmarked'
    ? agendaData[selectedDay as keyof typeof agendaData].filter((session) => session.bookmarked)
    : agendaData[selectedDay as keyof typeof agendaData].filter((session) => session.tags.some((tag) => tag.toLowerCase() === selectedFilter.toLowerCase()));

  const searchedAgenda = filteredAgenda.filter((session) =>
    session.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      {/* Agenda Tabs */}
      <AgendaTabs 
        selectedDay={selectedDay} 
        onDayChange={setSelectedDay} 
        availableTabs={availableTabs.map((day) => ({
          label: `Day ${day.slice(3)} - ${formatDate(dateMap[day as keyof typeof dateMap])}`, // "Day 1 - Sun Sep 30"
          value: day
        }))} 
      />

      {/* Search and Filter */}
      <SearchAndFilter
        searchText={searchText}
        onSearchChange={setSearchText}
        onFilterPress={() => setModalVisible(true)}
      />

      {/* Filter Tabs */}
      <FilterTabs
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        filters={['All Sessions', 'Bookmarked', 'Live']}
      />

      {/* Timeline */}
      {searchedAgenda.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No sessions available.</Text>
        </View>
      ) : (
        <AgendaTimeline agendaData={searchedAgenda} />
      )}

      {/* Modal */}
      <Modal isModalVisible={isModalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default AgendaScreen;