import {Text, View} from 'react-native';
import {labelStyles} from '../assets/styles/customLabel';

type CommonLabelsProps = {
  label?: string;
  icon: Function;
};

const CommonLabels = ({label, icon}: CommonLabelsProps) => {
  return (
    <View style={labelStyles.container}>
      <View>{icon()}</View>
      <View>
        <Text style={labelStyles.labelText}>{label}</Text>
      </View>
    </View>
  );
};

export default CommonLabels;
