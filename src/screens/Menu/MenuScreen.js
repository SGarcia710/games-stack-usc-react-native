import React, {useEffect} from 'react';

import {StyleSheet, View} from 'react-native';

import menuImageOne from '../../assets/images/MenuItemOne.png';
import menuImageTwo from '../../assets/images/MenuItemTwo.png';
import menuImageThree from '../../assets/images/MenuItemThree.png';

import {MenuButton, Header} from '../../components';
import LoaderScreen from '../Loader';

import {PURPLE_COLOR} from '../../assets/styles';

const MenuScreen = props => {
  const onPressMenuButton = where => {
    props.navigation.navigate(where);
  };

  useEffect(() => {
    if (!props.isGuest && !props.studentsLoaded) {
      props.fetchAllOwnStudents(props.user);
    }
  }, []);

  return props.isFetching ? (
    <LoaderScreen />
  ) : (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <Header title="GamesStack" />
      </View>
      <View style={styles.buttons}>
        {!props.isGuest && (
          <>
            <MenuButton
              image={menuImageOne}
              onPress={() => onPressMenuButton('RegisterStudent')}
              text="Registrar estudiante"
              marginBottom={20}
            />
            <MenuButton
              image={menuImageTwo}
              onPress={() => onPressMenuButton('StudentsList')}
              text="Lista de estudiantes"
              marginBottom={20}
            />
          </>
        )}
        <MenuButton
          image={menuImageThree}
          onPress={() => onPressMenuButton('GamesMenu')}
          text="Evaluar estudiante"
        />
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
  },
  header: {
    width: '100%',
    height: '20%',
  },
  buttons: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MenuScreen;
