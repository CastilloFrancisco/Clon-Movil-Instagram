import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function Post({ post }) {

    return (

        <View style={styles.container}>

            <View style={styles.header}>

                <View style={styles.userInfo}>

                    <View style={styles.avatar}/>

                    <Text style={styles.username}>
                        {post.username}
                    </Text>

                </View>

                <Feather
                    name="more-horizontal"
                    size={22}
                    color="black"
                />

            </View>

            <Image
                source={{ uri: post.image }}
                style={[styles.image, { height: Math.min(width * 0.82, 320) }]}
            />

            <View style={styles.actions}>

                <View style={styles.leftIcons}>

                    <Feather
                        name="heart"
                        size={26}
                        style={styles.icon}
                    />

                    <Feather
                        name="message-circle"
                        size={24}
                        style={styles.icon}
                    />

                    <Feather
                        name="send"
                        size={22}
                    />

                </View>

                <Feather
                    name="bookmark"
                    size={24}
                />

            </View>

            <Text style={styles.likes}>
                {post.likes} Me gusta
            </Text>

            <Text style={styles.description}>
                <Text style={{fontWeight:'bold'}}>
                    {post.username}
                </Text>{" "}
                {post.description}
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

    container:{
        marginBottom:20
    },

    header:{
        height:55,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10
    },

    userInfo:{
        flexDirection:'row',
        alignItems:'center'
    },

    avatar:{
        width:35,
        height:35,
        borderRadius:20,
            marginRight:10
    },

    username:{
        fontWeight:'bold'
    },

    image:{
        width:'100%',
        resizeMode:'cover',
        backgroundColor:'#EDEDED'
    },

    actions:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:12
    },

    leftIcons:{
        flexDirection:'row'
    },

    icon:{
        marginRight:15
    },

    likes:{
        fontWeight:'bold',
        marginHorizontal:12,
        marginBottom:5
    },

    description:{
        marginHorizontal:12
    }

});