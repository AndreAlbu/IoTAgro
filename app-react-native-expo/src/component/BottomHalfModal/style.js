import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  view: {
    backgroundColor: '#161616',
    paddingTop: 32,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    width: '100%',
    justifyContent: "center",
    alignItems: "center"
  },
  imageWarning: {
    width: 40,
    height: 40,
  },

  titleModal: {
    width: '50%',
    fontSize: 24,
    fontWeight: '500',
    textAlign: "center",
    marginTop: 32
  },

  btnGroupModal: {
    marginTop: 40,
    width: '95%',
    marginBottom: 32
  },

  btnModal: {
    paddingVertical: 16,
    alignItems: "center",
    borderRadius: 8
  },

  btnTextModal: {
    fontSize: 16,
    fontWeight: '700'
  },

  btnYesModal: {
    backgroundColor: '#008156',
  },

  btnNotModal: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#8A8A8A'
  }
});

export default styles;