import {StyleSheet} from 'react-native';

export const recordStyles = StyleSheet.create({
  scrollContainer: {
    width: '100%',
    borderRadius: 5,
  },
  dataText: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 8,
    justifyContent: 'space-between',
  },
  recordContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-evenly',
  },
  recordText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
  dateSetButton: {
    backgroundColor: '#0047FF',
    width: 70,
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 5,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 20,
  },
});
