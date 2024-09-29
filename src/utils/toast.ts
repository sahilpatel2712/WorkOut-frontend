import Toast from 'react-native-toast-message';

export const SuccessToast = (message: string) => {
  Toast.show({
    type: 'success',
    text1: message,
    position: 'bottom',
  });
};
export const ErrorToast = (message: string) => {
  Toast.show({
    type: 'error',
    text1: message,
    position: 'bottom',
  });
};
