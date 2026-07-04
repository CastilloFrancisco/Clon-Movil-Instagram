import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";

import Header from "../componentes/Header/Header";
import Stories from "../componentes/Stories/Stories";
import Feed from "../componentes/Feed/Feed";
import { styles } from "./Styles";
import { catService } from "../apis/structure";

export default function Landing({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [storyAvatars, setStoryAvatars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeed = async () => {
      try {
        const data = await catService.getFeedPosts(12);

        setPosts(data.slice(0, 4));
        setStoryAvatars(data.map((post) => post.avatarUrl));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadFeed();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#000" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Feed
            userId={item.userId}
            avatarUrl={item.avatarUrl}
            location={item.location}
            imageUrl={item.imageUrl}
            caption={item.caption}
            initialLikes={item.likesCount}
            onPressPost={() => navigation.navigate("Post", { id: item.id, imageUrl: item.imageUrl })}
          />
        )}
        ListHeaderComponent={
          <>
            <Header />
            <Stories storyAvatars={storyAvatars} />
          </>
        }
      />
    </View>
  );
}