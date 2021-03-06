import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 40,
        justifyContent: 'flex-end',
        backgroundColor: '#8257e5'
    },
    topBar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    topBarTitle: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 14
    },
    info:{
        flexDirection: 'column'
    },
    title:{
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        lineHeight: 24,
        maxWidth: 230,
        marginVertical: 40,
        marginTop: 20,
    },
    description:{
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 12,
        maxWidth: 300
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    profileData: {
        flexDirection: 'column',
        marginTop: 20,
        alignItems: 'center'
    },
    name:{
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 20,
        marginBottom: 5
    },
    subject: {
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 12
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 150
    }
})
export default styles