import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";

import Header from "../componentes/Header/Header";
import Stories from "../componentes/Stories/Stories";
import Feed from "../componentes/Feed/Feed";
import BottomBar from "../componentes/BottomBar/BottomBar";
import { styles } from "./Styles";

export default function Landing() {
  const [posts, setPosts] = useState([]);
  const [storyAvatars, setStoryAvatars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeed = async () => {
      try {
        // Replace this with your API call
        // const data = await catService.getFeedPosts(12);

        const data = [
          {
            id: "1",
            userId: "Bruno",
            avatarUrl: "https://i.pravatar.cc/150?img=12",
            imageUrl: "https://picsum.photos/600/600?1",
            caption: "Enjoying the day 🐱",
            likesCount: 2543,
            location: "Catland",
          },
          {
            id: "2",
            userId: "Runner",
            avatarUrl: "https://i.pravatar.cc/150?img=15",
            imageUrl: "https://picsum.photos/600/600?2",
            caption: "Morning run!",
            likesCount: 1820,
            location: "Buenos Aires",
          },
        ];

        setPosts(data);
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
          />
        )}
        ListHeaderComponent={
          <>
            <Header />
            <Stories storyAvatars={storyAvatars} />
          </>
        }
      />

      <BottomBar />
    </View>
  );
}