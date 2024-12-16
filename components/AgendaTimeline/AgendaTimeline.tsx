import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from './styles';

interface Speaker {
  id: string;
  name: string;
  image: string; // URL or local path for the speaker's image
}

interface Session {
  id: string;
  time: string; // Time in 12-hour format (e.g., "12:10 AM")
  title: string;
  duration: string; // Duration (e.g., "45 mins")
  hall: string; // Hall name
  bookmarked: boolean; // Bookmark status
  tags: string[]; // Array of tags

  speakers: Speaker[]; // List of speakers
}

interface AgendaTimelineProps {
  agendaData: Session[]; // Array of agenda data
}

const AgendaTimeline: React.FC<AgendaTimelineProps> = ({ agendaData }) => {
  const renderSessionCard = ({ item }: { item: Session }) => (
    <View style={styles.sessionContainer}>
      {/* Time Section */}
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>

      {/* Session Card */}
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>
            {item.duration} • {item.hall}
          </Text>
        </View>
        <View style={styles.tagContainer}>
          {item.tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>
              {tag}
            </Text>
          ))}
        </View>
        <View style={styles.speakersContainer}>
          {item.speakers.map((speaker) => (
            <Image
              key={speaker.id}
              source={speaker.image}
              style={styles.speakerImage}
              resizeMode="contain"
            />
          ))}
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={agendaData}
      keyExtractor={(item) => item.id}
      renderItem={renderSessionCard}
      contentContainerStyle={styles.timelineContainer}
    />
  );
};

export default AgendaTimeline;