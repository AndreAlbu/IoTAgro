import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text } from '../../../Thema';
import Modal from 'react-native-modal';
import styles from "./style";
import { ref, update} from "firebase/database";
import database from "../../config/firebaseconfig";


const BottomHalfModal = ({ visible, close, isOn }) => {

  const activateAutomaticMode = () => {
    const updates = {};
    updates[`/acionamentoManual`] = -1;

    update(ref(database), updates);
    close();
    return;
  }
  
  const activateManualMode = () => {
    const updates = {};
    updates[`/acionamentoManual`] = (isOn ? 0 : 1);
    updates[`/estadoBomba`] = (isOn ? 0 : 1);

    update(ref(database), updates);
    close();
    return;
  }

    return (
        <Modal
          testID={'modal'}
          isVisible={visible}
          onSwipeComplete={close}
          swipeDirection={['up', 'left', 'right', 'down']}
          onBackdropPress={close}
          onBackButtonPress={close}
          style={styles.modal}
        >
          <View style={styles.view}>
              
              <Image style={styles.imageWarning} source={require('./../../assets/Warning.png')}/>
              
              <Text style={styles.titleModal}>
                Deseja ativar o modo automático?
              </Text>

              <View style={styles.btnGroupModal}>
                <TouchableOpacity
                  style={[styles.btnModal, styles.btnYesModal]}
                  onPress={activateAutomaticMode}
                >
                  <Text style={styles.btnTextModal}>Sim, ativar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.btnModal, styles.btnNotModal]}
                  onPress={activateManualMode}
                >
                  <Text style={styles.btnTextModal}>
                    Não, {isOn ? 'desligar' : 'ligar'} bomba
                  </Text>
                </TouchableOpacity>
              </View>
          </View>
        </Modal>
    );
}

export default BottomHalfModal;