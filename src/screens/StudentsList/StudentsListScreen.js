import React, {useEffect, useState} from 'react';

import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {Table, TableWrapper, Row} from 'react-native-table-component';

import NavigationHeader from '../../components/NavigationHeader';

import {
  PURPLE_COLOR,
  LIGHT_YELLOW_COLOR,
  BROWN_COLOR,
  LIGHT_PURPLE_COLOR,
  WHITE_COLOR,
  MULI_MEDIUM,
  MULI_BOLD,
  MULI_REGULAR,
  DARK_BLUE_COLOR,
} from '../../assets/styles';

import {getStudentscontroller} from '../../controllers/studentsController';

const StudentsListScreen = props => {
  const tableHeaders = [
    'Código',
    <Text style={{...styles.tableHeadersText, textAlign: 'left'}}>
      Nombre estudiante
    </Text>,
    'Colegio',
    'Ciudad',
    'Fecha de nacimiento',
  ];
  const widthArr = [150, 220, 190, 180, 180];
  const tableData = [
    [
      56235,
      [
        <Text
          style={{...styles.tableText, textAlign: 'left', fontWeight: '800'}}>
          Daniel Alejandro{'\n'}
        </Text>,
        <Text style={{...styles.tableText, textAlign: 'left'}}>
          García Ortiz
        </Text>,
      ],
      'Colegio Nuestra Señora de la Consolación',
      'Cali',
      '05/10/1996',
    ],
    [
      56235,
      [
        <Text
          style={{...styles.tableText, textAlign: 'left', fontWeight: '800'}}>
          Daniel Alejandro{'\n'}
        </Text>,
        <Text style={{...styles.tableText, textAlign: 'left'}}>
          García Ortiz
        </Text>,
      ],
      'Colegio San Antonio María Clared',
      'Bogotá',
      '05/10/1996',
    ],
    [
      56235,
      [
        <Text
          style={{...styles.tableText, textAlign: 'left', fontWeight: '800'}}>
          Daniel Alejandro{'\n'}
        </Text>,
        <Text style={{...styles.tableText, textAlign: 'left'}}>
          García Ortiz
        </Text>,
      ],
      'Colegio el Rosarío',
      'Medellín',
      '05/10/1996',
    ],
    [
      56235,
      [
        <Text
          style={{...styles.tableText, textAlign: 'left', fontWeight: '800'}}>
          Daniel Alejandro{'\n'}
        </Text>,
        <Text style={{...styles.tableText, textAlign: 'left'}}>
          García Ortiz
        </Text>,
      ],
      'Institución Educativa Antonio José Camacho',
      'Zipaquirá',
      '05/10/1996',
    ],
    [
      56235,
      [
        <Text
          style={{...styles.tableText, textAlign: 'left', fontWeight: '800'}}>
          Daniel Alejandro{'\n'}
        </Text>,
        <Text style={{...styles.tableText, textAlign: 'left'}}>
          García Ortiz
        </Text>,
      ],
      'Colegio LaCordaire',
      'Bucaramanga',
      '05/10/1996',
    ],
    [
      56235,
      [
        <Text
          style={{...styles.tableText, textAlign: 'left', fontWeight: '800'}}>
          Daniel Alejandro{'\n'}
        </Text>,
        <Text style={{...styles.tableText, textAlign: 'left'}}>
          García Ortiz
        </Text>,
      ],
      'Colegio Aleman',
      'Santa Marta',
      '05/10/1996',
    ],
    [
      56235,
      [
        <Text
          style={{...styles.tableText, textAlign: 'left', fontWeight: '800'}}>
          Daniel Alejandro{'\n'}
        </Text>,
        <Text style={{...styles.tableText, textAlign: 'left'}}>
          García Ortiz
        </Text>,
      ],
      'Centro Docente Bartolomé Mitre',
      'Barranquilla',
      '05/10/1996',
    ],
    [
      56235,
      [
        <Text
          style={{...styles.tableText, textAlign: 'left', fontWeight: '800'}}>
          Daniel Alejandro{'\n'}
        </Text>,
        <Text style={{...styles.tableText, textAlign: 'left'}}>
          García Ortiz
        </Text>,
      ],
      'Colegio Nuestra Señora de la Consolación',
      'Pereira',
      '05/10/1996',
    ],
  ];

  return (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <NavigationHeader
          title="Lista de estudiantes"
          navigation={props.navigation}
        />
      </View>
      <View style={styles.list}>
        <View>
          <Table>
            <Row
              data={tableHeaders}
              widthArr={widthArr}
              style={styles.tableHeader}
              textStyle={styles.tableHeadersText}
            />
          </Table>
          {/* https://stackoverflow.com/questions/49373417/react-native-scrollview-height-always-stays-static-and-does-not-change */}
          <View style={styles.tableDataWrapper}>
            <ScrollView>
              <Table>
                {tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={widthArr}
                    style={styles.tableRow}
                    textStyle={styles.tableText}
                  />
                ))}
              </Table>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: PURPLE_COLOR,
    width: '100%',
    height: '100%',
    paddingHorizontal: 79,
    paddingVertical: 80,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: '25%',
  },
  form: {
    width: '100%',
    height: '55%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 71,
  },
  tableHeader: {
    height: 50,
    backgroundColor: LIGHT_PURPLE_COLOR,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 4,
  },
  tableHeadersText: {
    fontFamily: MULI_MEDIUM,
    textAlign: 'center',
    color: WHITE_COLOR,
    fontSize: 14,
    lineHeight: 24,
  },
  tableDataWrapper: {
    height: 410,
  },
  tableText: {
    fontFamily: MULI_REGULAR,
    color: DARK_BLUE_COLOR,
    textAlign: 'center',
  },
  tableRow: {
    height: 64,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: WHITE_COLOR,
    marginBottom: 5,
  },
});

export default StudentsListScreen;
