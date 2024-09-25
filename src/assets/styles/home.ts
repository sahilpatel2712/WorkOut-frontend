import {StyleSheet} from 'react-native';

export const homeStyles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 30,
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    elevation: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginVertical: 10,
  },
  labelText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    paddingLeft: 5,
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#333',
    color: '#000',
    maxHeight: 40,
    borderRadius: 5,
  },
});
