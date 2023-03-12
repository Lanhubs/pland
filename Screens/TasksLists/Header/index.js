import {VStack} from 'native-base';
import {View, Image, Text} from 'react-native';
import {styles} from '../Style';

const Header = () => {
  return (
    <>
      <View style={styles.header}>
        <VStack width={'50%'}>
          <Text style={styles.username}>Habeeb Muhammed</Text>
          <Text style={styles.heroText}>Let this app plan your days</Text>
        </VStack>
        <Image
          source={require("../../../assets/user.png")}
          style={styles.userImg}
          // resizeMode="contain"
        />
      </View>
    </>
  );
};
export default Header;
