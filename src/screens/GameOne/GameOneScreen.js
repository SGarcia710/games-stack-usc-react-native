import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, SafeAreaView, Image, View} from 'react-native';

import {
  LIGHT_YELLOW_COLOR,
  WHITE_COLOR,
  DARK_FONT_COLOR,
} from '../../assets/styles';
import {Button} from '../../components';
import SessionFinishedScreen from '../SessionFinished/SessionFinishedScreen';
import GameOneInstructions from '../Instructions/GameOneInstructions';

import {generateLevelsGameOne} from '../../utils/Misc';

import RedFlower from '../../assets/images/RedFlower.png';
import GreenFlower from '../../assets/images/GreenFlower.png';

// Constantes del juego
const DELAY_PER_LEVEL = 1000; // Segundos por nivel (1000ms = 1 segundo)
const TRAINING_LEVELS = 2;
const LEVELS = 2; // Cantidad de niveles = 2 minutos => 120 niveles  (1 x segundo)
const GAME_MAP = {
  training: generateLevelsGameOne(TRAINING_LEVELS),
  normal: generateLevelsGameOne(LEVELS),
  inverted: generateLevelsGameOne(LEVELS),
};

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const GameOneScreen = () => {
  const [data, setData] = useState({
    training: {
      elapsedTime: 0,
      answers: [],
    },
    normal: {
      elapsedTime: 0,
      answers: [],
    },
    inverted: {
      elapsedTime: 0,
      answers: [],
    },
  });
  // const [levels, setLevels] = useState(GAME_MAP.training);
  const [levels, setLevels] = useState([1, 0, 1]);
  const [level, setLevel] = useState(0);
  const [levelTime, setLevelTime] = useState(0);
  const [stage, setStage] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const checkAnswer = wasPressed => {
    switch (stage) {
      case 1:
      case 3:
        if (wasPressed) {
          // Si el botón fue presionado
          if (levels[level]) {
            // Si el nivel era para presionar
            return true;
          } else {
            // Si el nivel no era para presionar
            return false;
          }
        } else {
          // Si el botón no fue presionado, es decir pasaron los x segundos
          if (levels[level]) {
            // Si el nivel era para presionar
            return false;
          } else {
            // Si el nivel no era para presionar
            return true;
          }
        }
      case 5:
        if (wasPressed) {
          // Si el botón fue presionado
          if (levels[level]) {
            // Si el nivel era para presionar
            return false;
          } else {
            // Si el nivel no era para presionar
            return true;
          }
        } else {
          // Si el botón no fue presionado, es decir pasaron los x segundos
          if (levels[level]) {
            // Si el nivel era para presionar
            return true;
          } else {
            // Si el nivel no era para presionar
            return false;
          }
        }
    }
  };

  const nextLevel = wasPressed => {
    setLevel(level + 1); // Pase al siguiente nivel
    saveStageData(wasPressed); // Acumulo datos del usuario, si fue correcto y cuanto demoró
  };

  const saveStageData = wasPressed => {
    switch (stage) {
      case 1:
        setData({
          ...data,
          training: {
            ...data.training,
            answers: [...data.training.answers, checkAnswer(wasPressed)],
          },
        });
        break;
      case 3:
        setData({
          ...data,
          normal: {
            ...data.normal,
            answers: [...data.normal.answers, checkAnswer(wasPressed)],
          },
        });
        break;
      case 5:
        setData({
          ...data,
          inverted: {
            ...data.inverted,
            answers: [...data.inverted.answers, checkAnswer(wasPressed)],
          },
        });
        break;
    }
  };

  const onNextStageHandler = () => {
    switch (stage) {
      case 0: // Si se avanza de stage, y está en stage 0(Primeras instrucciones), se comienza el training
        setIsRunning(true);
        setStage(stage + 1); // Avanzo al siguiente stage
        break;
      case 1: // Si se avanza de stage, y está en stage 1(Training), se lleva a las instrucciones nuevamente
        setData({
          ...data,
          training: {...data.training, elapsedTime: levelTime - 1},
        });
        setLevelTime(0);
        setLevels(GAME_MAP.normal);
        setStage(stage + 1);
        break;
      case 2: // Si se avanza de stage, y está en el Stage 2(Instrucciones después de training), se comienza el juego normal de 2 minutos
        setIsRunning(true);
        setStage(stage + 1);
        break;
      case 3: // Si se avanza de stage, y se está en el Stage 3(Juego normal), se lleva a las instrucciones de juego invertido
        setData({
          ...data,
          normal: {...data.normal, elapsedTime: levelTime - 1},
        });
        setLevelTime(0);
        setLevels(GAME_MAP.inverted);
        setStage(stage + 1);
        break;
      case 4: // Si se avanza de stage, y se está en el Stage 4(instrucciones de juego inertido), se comienza el juego invertido de 2 minutos
        setIsRunning(true);
        setStage(stage + 1);
        break;
      case 5: // Si se avanza de stage, y se está en el Stage 5(Juego invertido), se lleva a la pantalla de finalización
        setData({
          ...data,
          inverted: {...data.inverted, elapsedTime: levelTime - 1},
        });
        setLevelTime(0);
        setStage(stage + 1);
        break;
    }
  };

  useInterval(
    () => {
      setLevelTime(levelTime + 1);
    },
    isRunning ? DELAY_PER_LEVEL : null,
  );

  const onButtonPress = () => {
    if (isRunning) {
      if (level === levels.length) {
        setLevel(0);
        setIsRunning(false);
        onNextStageHandler();
      } else {
        nextLevel(true);
      }
    }
  };

  useEffect(() => {
    if (isRunning) {
      if (level === levels.length) {
        setLevel(0);
        setIsRunning(false);
        onNextStageHandler();
      } else {
        nextLevel(false);
      }
    }
  }, [levelTime]);

  const renderSwitcher = stage => {
    switch (stage) {
      case 0:
        return (
          <GameOneInstructions
            onNextStageHandler={onNextStageHandler}
            stage="normal"
          />
        );
      case 1:
        return (
          <SafeAreaView style={styles.container}>
            <View style={styles.images}>
              <Image style={styles.image} source={GreenFlower} />
              <Image
                style={styles.image}
                source={levels[level] ? RedFlower : GreenFlower}
              />
            </View>
            <Button
              onPress={() => onButtonPress()}
              text="Presiona aquí"
              backgroundColor={LIGHT_YELLOW_COLOR}
              fontColor={DARK_FONT_COLOR}
            />
          </SafeAreaView>
        );
      case 2:
        return (
          <GameOneInstructions
            onNextStageHandler={onNextStageHandler}
            stage="normal"
          />
        );
      case 3:
        return (
          <SafeAreaView style={styles.container}>
            <View style={styles.images}>
              <Image style={styles.image} source={GreenFlower} />
              <Image
                style={styles.image}
                source={!levels[level] ? GreenFlower : RedFlower}
              />
            </View>
            <Button
              onPress={() => onButtonPress()}
              text="Presiona aquí"
              backgroundColor={LIGHT_YELLOW_COLOR}
              fontColor={DARK_FONT_COLOR}
            />
          </SafeAreaView>
        );
      case 4:
        return (
          <GameOneInstructions
            onNextStageHandler={onNextStageHandler}
            stage="inverted"
          />
        );
      case 5:
        return (
          <SafeAreaView style={styles.container}>
            <View style={styles.images}>
              <Image style={styles.image} source={GreenFlower} />
              <Image
                style={styles.image}
                source={!levels[level] ? GreenFlower : RedFlower}
              />
            </View>
            <Button
              onPress={() => onButtonPress()}
              text="Presiona aquí"
              backgroundColor={LIGHT_YELLOW_COLOR}
              fontColor={DARK_FONT_COLOR}
            />
          </SafeAreaView>
        );
      case 6:
        return <SessionFinishedScreen />;
    }
  };

  return <>{renderSwitcher(stage)}</>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE_COLOR,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    flexDirection: 'row',
  },
  image: {
    resizeMode: 'contain',
    width: 120,
    height: 180,
  },
});

export default GameOneScreen;
