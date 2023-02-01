import { View, Image } from "react-native";
import { Avatar, Text } from "react-native-paper";
import { styles } from "../Style";

export const CustomHeader = ({ children }) => (
    <View style={styles.header}>
      <View style={styles.mainheader}>
        <Text>Habeeb Muhammed</Text>
        <Avatar>
          <Image source={userImg} />
        </Avatar>
      </View>
    </View>
  );