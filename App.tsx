import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

const CHARACTER_LIMIT = 280;

const App = () => {
  const [charsRemaining, setCharsRemaining] = useState(CHARACTER_LIMIT);

  const handleChange = (changedText: string) => {
    let changedTextLength = changedText.length;
    setCharsRemaining(CHARACTER_LIMIT - changedTextLength);
  };

  const getInputStyles = () => {
    if (charsRemaining < 10 && charsRemaining > -1) {
      return {borderColor: '#eedb0c', backgroundColor: '#f8f4cd'};
    } else if (charsRemaining < 0) {
      return {borderColor: '#dd1010', backgroundColor: '#f7cccc'};
    }
    return {};
  };

  const getTextStyles = () => {
    if (charsRemaining < 10 && charsRemaining > -1) {
      return {color: '#eedb0c'};
    } else if (charsRemaining < 0) {
      return {color: '#dd1010'};
    }
    return {};
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <TextInput
          multiline={true}
          placeholder="Add up 280 characters"
          onChangeText={handleChange}
          style={{...styles.inputStyle, ...getInputStyles()}}
        />
        <Text style={{...styles.charText, ...getTextStyles()}}>
          {charsRemaining} characters remaining
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    height: 260,
    borderWidth: 2,
    padding: 25,
    width: '90%',
    borderRadius: 20,
    marginBottom: 20,
  },
  charText: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default App;
