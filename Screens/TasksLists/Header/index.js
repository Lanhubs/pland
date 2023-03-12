
import {View, Image, Text} from 'react-native';
import {styles} from '../Style';

const Header = () => {
  return (
    <>
      <View style={styles.header}>
        <View  style={{width: "60%", }}>
          <Text style={{fontSize: 12, color: "#fff"}}>Habeeb Muhammed</Text>
          <Text style={{color: "#fff", fontSize: 18, marginTop: 5}}>Let this app plan your days</Text>
        </View>
        <Image
          source={require("../../../assets/user.png")}
          style={styles.userImg}
          resizeMode="contain"
        />
      </View>
    </>
  );
};
export default Header;
