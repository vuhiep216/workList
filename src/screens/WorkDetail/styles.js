import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  content: {
    flex: 1,
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
  },
  info: {
    fontSize: 15,
  },
  itemContainer: {
    width: 400,
    height: 400,
  },
  img: {
    width: 400,
    height: 400,
  },
});
export default styles;
