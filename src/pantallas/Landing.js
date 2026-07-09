import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Image,
  Text,
} from "react-native";

import Header from "../componentes/Header/Header";
import Stories from "../componentes/Stories/Stories";
import Feed from "../componentes/Feed/Feed";
import { styles } from "./Styles";
import { catService } from "../apis/structure";

export default function Landing({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [storyAvatars, setStoryAvatars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

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

  const loadMorePosts = async () => {
    if (loadingMore) return;

    setLoadingMore(true);

    try {
      // Simula una demora de carga
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const newPosts = await catService.getFeedPosts(4);

      // Genera IDs únicos para evitar claves repetidas
      const postsWithUniqueIds = newPosts.map((post, index) => ({
        ...post,
        id: `${post.id}-${Date.now()}-${index}`,
      }));

      setPosts((prevPosts) => [...prevPosts, ...postsWithUniqueIds]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingMore(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#000" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Feed
            userId={item.userId}
            avatarUrl={item.avatarUrl}
            location={item.location}
            imageUrl={item.imageUrl}
            caption={item.caption}
            initialLikes={item.likesCount}
            onPressPost={() =>
              navigation.navigate("Post", {
                id: item.id,
                imageUrl: item.imageUrl,
              })
            }
          />
        )}
        ListHeaderComponent={
          <>
            <Header />
            <Stories storyAvatars={storyAvatars} />
          </>
        }
        onEndReached={loadMorePosts}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loadingMore ? (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 30,
              }}
            >
              <Image
                source={require("../../assets/spinner.gif")}
                style={{
                  width: 60,
                  height: 60,
                  marginBottom: 10,
                }}
                resizeMode="contain"
              />

              <Text
                style={{
                  fontSize: 16,
                  color: "#555",
                  fontWeight: "500",
                }}
              >
                Cargando más posts...
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
}