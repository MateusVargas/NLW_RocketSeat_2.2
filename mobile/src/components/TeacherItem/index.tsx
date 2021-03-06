import React, { useState } from 'react'
import {RectButton} from 'react-native-gesture-handler'
import {View,Image,Text,Linking} from 'react-native'
import styles from './styles'

import heartIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsAppIcon from '../../assets/images/icons/whatsapp.png'

import AsyncStorage from '@react-native-community/async-storage'
import api from '../../services/api'

export interface Teacher{
    id: number
    avatar: string
    bio: string
    cost: number
    name: string
    subject: string
    whatsapp: string
}

interface TeacherItemProps{
    teacher: Teacher
    favorited: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher,favorited}) => {

    const [isFavorited,setIsFavorited] = useState(favorited)

    function openWhatsApp() {
        api.post('/connections',{
            proffy_id: teacher.id
        })
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }

    async function handleToggleFavorite() {

        const favorites = await AsyncStorage.getItem('favorites')
        let favoritesArray = []

        if(favorites){
            favoritesArray = JSON.parse(favorites)
        }

        if(isFavorited){
            const favoriteIndex = favoritesArray.findIndex((teacherItem:Teacher)=>{
                return teacherItem.id === teacher.id
            })
            favoritesArray.splice(favoriteIndex, 1)
            setIsFavorited(false)
        }else{
            favoritesArray.push(teacher)
            setIsFavorited(true)
        }

        await AsyncStorage.setItem('favorites',JSON.stringify(favoritesArray))
    }

    return (
        <View style={styles.container}>
            <View style={styles.profiles}>
            {teacher.avatar ? (
                <Image style={styles.avatar} source={{uri: teacher.avatar}}/>
            ) : null}
                <View style={styles.profileInfo}>
                <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>{teacher.bio}</Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>{teacher.cost}</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton
                        onPress={handleToggleFavorite}
                        style={[
                            styles.favoriteButton,
                            isFavorited ? styles.favorited : {},
                        ]}
                    >
                        { isFavorited 
                            ? 
                            <Image source={unFavoriteIcon}/>
                            :
                            <Image source={heartIcon}/>
                        }
                    </RectButton>

                    <RectButton onPress={openWhatsApp} style={styles.contactButton}>
                        <Image source={whatsAppIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )

}
export default TeacherItem