import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

export default function App() {

  const [values, setValues] = useState('');

  const [firstValue, setFirstValue] = useState('');
  const [operation, setOperation] = useState('');

  const clearMemory = () => {
    setValues('');
  }

  const addDigit = (value) => {
    value !== '.' 
      ? setValues(values + `${value}`) 
      : setValues((values).replace('.', '') + '.');
  }

  const result = () => {
    switch (operation) {
      case 'sum':
        setValues(Number(firstValue) + Number(values));
        break;
      case 'subs': 
        setValues(Number(firstValue) - Number(values));
        break;
      case 'multiply': 
        setValues(Number(firstValue) * Number(values));
        break;
      case 'divider': 
        setValues(Number(firstValue) / Number(values));
      break;
    }
    setFirstValue(values)
  }

  const setAndClear = () => {
    setFirstValue(values);
    clearMemory();
  }

  const operations = {
    sum: () => {
      setOperation('sum');
      setAndClear();
    },
    subs: () => {
      setOperation('subs');
      setAndClear();
    },
    mult: () => {
      setOperation('multiply');
      setAndClear();
    },
    divider: () => {
      setOperation('divider');
      setAndClear();
    },
  }

  const buttons = [
    ['AC', 'triple', clearMemory], ['/', 'operation', operations.divider],
    ['7', '', () => addDigit(7)], ['8', '', () => addDigit(8)], ['9', '', () => addDigit(9)], ['x', 'operation', operations.mult],
    ['4', '', () => addDigit(4)], ['5', '', () => addDigit(5)], ['6', '', () => addDigit(6)], ['-', 'operation', operations.subs],
    ['1', '', () => addDigit(1)], ['2', '', () => addDigit(2)], ['3', '', () => addDigit(3)], ['+', 'operation', operations.sum],
    ['0', 'double', () => addDigit(0)], ['.', '', () => addDigit('.')], ['=', 'operation', () => result()]
  ]

  return (
    <SafeAreaView style={styles.container}>
      <Display values={values}/>
      <View style={styles.button}>
        {buttons.map(
          button => 
          <Button 
            label={button[0]} 
            lengthStyle={button[1]} 
            onClick={button[2]} 
            key={button[0]} 
        />)}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
 