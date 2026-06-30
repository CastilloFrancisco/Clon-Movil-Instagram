import { useEffect, useState } from "react";
import { FlatList } from "react-native";

import api from "../apis/apis";
import Post from "./Post";

export default function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        cargarPosts();
    }, []);

    async function cargarPosts() {

        try {

            const response = await api.get("/images/search?limit=10");

            const datos = response.data.map((item, index) => ({
                id: item.id,
                image: item.url,
                username: `cat_${index + 1}`,
                likes: Math.floor(Math.random() * 5000),
                description: "Living my best cat life 🐱"
            }));

            setPosts(datos);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Post post={item}/>
            )}
            showsVerticalScrollIndicator={false}
        />
    );

}