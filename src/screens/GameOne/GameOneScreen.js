import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Image, View} from 'react-native';

import {
  LIGHT_YELLOW_COLOR,
  WHITE_COLOR,
  BROWN_COLOR,
} from '../../assets/styles';
import Button from '../../components/Button';
import SessionFinishedScreen from '../SessionFinished/SessionFinishedScreen';

import rick from '../../assets/images/Rick.png';
import morty from '../../assets/images/Morty.png';

// Constantes del juego
const TIME_LIMIT = 3; // Segundos por nivel
const LEVELS = 3; // Cantidad de niveles

class GameOneScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      data: [],
      levels: [1, 0, 0, 1],
      level: 0,
      levelTime: 0,
      totalTime: 0,
      finished: false,
    };
  }

  checkAnswer(wasPressed) {
    if (wasPressed) {
      // Si el botón fue presionado
      if (this.state.levels[this.state.level]) {
        // Si el nivel era para presionar
        return true;
      } else {
        // Si el nivel no era para presionar
        return false;
      }
    } else {
      // Si el botón no fue presionado, es decir pasaron los x segundos
      if (this.state.levels[this.state.level]) {
        // Si el nivel era para presionar
        return false;
      } else {
        // Si el nivel no era para presionar
        return true;
      }
    }
  }

  nextLevel(wasPressed) {
    this.setState({
      level: this.state.level + 1, // Pase al siguiente nivel
      data: [
        ...this.state.data,
        {time: this.state.levelTime, wasCorrect: this.checkAnswer(wasPressed)},
      ], // Acumulo los 10 segundos al arreglo de tiempos por nivel
      levelTime: 0, // Reseteo el tiempo de nivel a 0
    });
  }

  finishGame() {
    clearInterval(this.interval);
    this.setState({
      finished: true,
    });
    console.log('Juego Finalizado');
  }

  onButtonPress() {
    if (this.state.level === this.state.levels.length) {
      // Si ya llegué al nivel máximo, cancelo el interval
      this.finishGame();
    } else {
      // Paso al siguiente nivel
      this.nextLevel(true);
    }
  }

  // Cuando el componente ha sido montado
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        levelTime: this.state.levelTime + 1, // Cuenta 1 segundo
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!this.state.finished) {
      console.log(
        `Es el nivel ${this.state.level} y han transcurrido ${
          this.state.levelTime
        } segundos.`,
      );

      if (this.state.level === this.state.levels.length) {
        // Si ya llegué al nivel máximo, cancelo el interval
        this.finishGame();
      } else if (this.state.levelTime === TIME_LIMIT) {
        // Paso al siguiente nivel
        this.nextLevel(false);
      }
    } else {
      // El juego ya terminó
      console.log(this.state.data);
    }
  }

  componentDidCatch() {}
  componentWillUnmount() {}

  render() {
    if (!this.state.finished) {
      return (
        <SafeAreaView style={styles.container}>
          <>
            <View style={styles.images}>
              <Image style={styles.image} source={rick} />
              <Image
                style={styles.image}
                source={!this.state.levels[this.state.level] ? rick : morty}
              />
            </View>
            {/* https://stackoverflow.com/a/37124054 */}
            <Button
              onPress={() => this.onButtonPress()}
              text="Presiona aquí"
              backgroundColor={LIGHT_YELLOW_COLOR}
              fontColor={BROWN_COLOR}
            />
          </>
        </SafeAreaView>
      );
    } else {
      return <SessionFinishedScreen />;
    }
  }
}

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
