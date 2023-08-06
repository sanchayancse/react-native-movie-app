import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface AccountScrrenProps {}

const AccountScrren = (props: AccountScrrenProps) => {
  return (
    <View style={styles.container}>
      <Text>AccountScrren</Text>
    </View>
  );
};

export default AccountScrren;

const styles = StyleSheet.create({
  container: {},
});
