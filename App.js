/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  StatusBar,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import rick from './src/assets/images/Rick.png';
import morty from './src/assets/images/Morty.png';

// Constantes del juego
const TIME_LIMIT = 3; // Segundos por nivel
const LEVELS = 3; // Cantidad de niveles

class App extends Component {
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
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          {!this.state.finished && (
            <>
              <View style={styles.images}>
                <Image style={styles.image} source={rick} />
                <Image
                  style={styles.image}
                  source={!this.state.levels[this.state.level] ? rick : morty}
                />
              </View>
              {/* https://stackoverflow.com/a/37124054 */}
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => this.onButtonPress()}
                title="Presioname">
                <Text style={styles.buttonText}>Presiona aquí</Text>
              </TouchableOpacity>
            </>
          )}
          {this.state.finished && (
            <View style={styles.finishedContainer}>
              <Text style={styles.finishedText}>JUEGO TERMINADO</Text>
            </View>
          )}
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262A33',
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
  buttonContainer: {
    marginTop: 30,
    backgroundColor: 'white',
    width: 180,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  finishedContainer: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  finishedText: {
    fontSize: 30,
    fontWeight: '900',
    color: 'white',
  },
});

export default App;
