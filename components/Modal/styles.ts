import { colors } from '@/styles/colors';
import { metrics } from '@/styles/metrics';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   
modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: colors.defaultBackground,
    padding: metrics.spacing.large,
    paddingTop: metrics.spacing.large * 3,
    borderRadius: metrics.borderRadius.medium,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginLeft: metrics.spacing.large,
    marginRight: metrics.spacing.large,
  },
  modalImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.defaultText,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: colors.defaultBackground,
    padding: metrics.spacing.xsmall,
    position: 'absolute',
    top: metrics.spacing.medium,
    right: metrics.spacing.medium,
  },
  closeButtonText: {
    color: colors.white,
    fontWeight: 'bold',
  },        
});

export default styles;