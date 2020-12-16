import { PixelRatio, Dimensions } from 'react-native';

const ratio = PixelRatio.get();

interface NormalizeProps {
  size: number;
}
const normalize = ({ size }: NormalizeProps) => {
  const { width, height } = Dimensions.get('window');

  return size;
};

export default normalize;
