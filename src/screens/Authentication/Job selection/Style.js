import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  optionBtn: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#019F99',
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#019F99',
  },
  nextBtn: {
    flexDirection: 'row', // Added flexDirection
    marginTop: 60,
    paddingHorizontal: 20, // Adjusted paddingHorizontal
    paddingVertical: 20,
    backgroundColor: '#000000',
    borderRadius: 5,
    alignItems: 'center', // Added alignItems
  },
  nextBtnText: {
    fontSize: 16,
    color: '#fff',
    marginRight: 10, // Added marginRight for spacing between text and icon
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  clearBtn: {
    flexDirection: 'row', // Added flexDirection
    marginTop: 80,
    paddingHorizontal: 20, // Adjusted paddingHorizontal
    paddingVertical: 20,
    backgroundColor: '#019F99',
    borderRadius: 5,
    alignItems: 'center', // Added alignItems
  },
  

})