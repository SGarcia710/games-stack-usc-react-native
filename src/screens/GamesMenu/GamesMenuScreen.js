import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

import {StyleSheet, View} from 'react-native';
import {
  Button,
  Dropdown,
  Label,
  GameCard,
  NavigationHeader,
} from '../../components';
import {
  BACKGROUND_COLOR,
  LIGHT_BLUE_COLOR,
  WHITE_COLOR,
  DARK_FONT_COLOR,
  LIGHT_YELLOW_COLOR,
} from '../../assets/styles';

const GamesMenuScreen = props => {
  useEffect(() => {
    return function cleanup() {
      props.setSelectedGame(null);
      props.setSelectedStudent(null);
    };
  }, []);

  let dropdownStudents;
  if (!props.isGuest) {
    dropdownStudents =
      props.studentsList.length > 0
        ? props.studentsList.map(student => {
            const {nombres, apellidos} = student.datos;
            return {
              label: `${nombres} ${apellidos}`,
              value: student._id,
            };
          })
        : [];
  }

  const onPressGameButton = gameNumber => {
    switch (gameNumber) {
      case 1:
        props.navigation.navigate('GameOne');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <NavigationHeader title="Evaluar estudiante" />
      </View>
      <View style={styles.body}>
        <View style={styles.column}>
          {!props.isGuest && (
            <Dropdown
              labelText="Seleccionar estudiante"
              placeholder="Elige un estudiante..."
              items={dropdownStudents}
              onValueChange={props.setSelectedStudent}
              value={props.selectedStudent}
              marginBottom={79}
            />
          )}
          <View style={styles.gamesList}>
            <Label text="Seleccionar juego" />
            {props.gamesList.map(game => {
              return (
                <Button
                  key={() => uuidv4()}
                  onPress={() => props.setSelectedGame(game.id)}
                  text={game.title}
                  backgroundColor={LIGHT_BLUE_COLOR}
                  fontColor={WHITE_COLOR}
                  marginBottom={11}
                />
              );
            })}
          </View>
        </View>
        {props.selectedGameId && (
          <View style={styles.column}>
            <GameCard
              {...props.gamesList[props.selectedGameId - 1]}
              marginBottom={30}
            />
            <Button
              onPress={() => onPressGameButton(props.selectedGameId)}
              text="Iniciar actividad"
              icon="arrow-right"
              iconPosition="right"
              backgroundColor={LIGHT_YELLOW_COLOR}
              fontColor={DARK_FONT_COLOR}
              marginBottom={23}
              marginForText={132}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: BACKGROUND_COLOR,
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
  body: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  column: {
    width: '48%',
  },
});

export default GamesMenuScreen;
