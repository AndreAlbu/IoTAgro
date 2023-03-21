import { StyleSheet } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  view: {
    width: '100%',
    paddingTop: RFValue(32),
    borderTopRightRadius: RFValue(32),
    borderTopLeftRadius: RFValue(32),
    paddingBottom: RFValue(32),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#161616',
  },
  imageWarning: {
    fontSize: RFValue(40.5),
    color: '#EAC711'
  },

  titleModal: {
    width: '60%',
    fontSize: RFValue(24),
    fontWeight: '500',
    textAlign: "center",
    marginTop: RFValue(32),
  },

  btnGroupModal: {
    marginTop: RFValue(40),
    width: '89.4%',
  },

  btnModal: {
    paddingVertical: RFValue(12),
    paddingHorizontal: RFValue(24),
    alignItems: "center",
    borderRadius: RFValue(4)
  },
  
  btnYesModal: {
    backgroundColor: '#07C888',
  },

  btnNotModal: {
    borderWidth: 1,
    borderColor: '#8A8A8A',
    marginTop: RFValue(16),
  },
  
  btnTextModalYes: {
    fontSize: RFValue(16),
    fontWeight: '700',
    color: '#030C09'
  },
  
  btnTextModalNot: {
    fontSize: RFValue(16),
    fontWeight: '700',
  },


});

export default styles;