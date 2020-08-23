import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";

import styles from './styles'

const App = () => {
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Do you like React Native?</Text>
          </View>
          <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>
        </View>
      );
}

export default App;

