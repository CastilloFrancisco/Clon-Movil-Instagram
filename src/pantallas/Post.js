import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { Heart, MessageCircle, Send } from "lucide-react-native";

import { styles } from "./Styles";

const COMMENT_SETS = [
  [
    { id: "1", user: "cat_lover99", text: "Qué michi tan hermoso! 😍" },
    { id: "2", user: "garfield_real", text: "Tiene cara de querer lasaña..." },
    { id: "3", user: "pawsome_cat", text: "Excelente foto, qué camarita usaron?" }
  ],
  [
    { id: "1", user: "kittyqueen", text: "Las notas de color en esta foto están perfectas!" },
    { id: "2", user: "miau_miau", text: "Ese gatito necesita su propio merch." },
    { id: "3", user: "gato_trendy", text: "¿Dónde consigo ese fondo tan cozy?" }
  ],
  [
    { id: "1", user: "whisker_fan", text: "Yo también quiero una siestita así." },
    { id: "2", user: "mr_purr", text: "Ese poseo es digno de portada." },
    { id: "3", user: "gatomodel", text: "¡Qué ojitos más expresivos!" }
  ],
  [
    { id: "1", user: "cuddleme", text: "Paajita por aquí, qué ternura." },
    { id: "2", user: "gatuno", text: "El filtro es perfecto para este contenido." },
    { id: "3", user: "mi_azul", text: "Quiero más fotos así en mi feed." }
  ]
];

const getCommentSetForId = (identifier) => {
  if (!identifier) {
    return COMMENT_SETS[0];
  }
  const hash = Array.from(identifier).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const index = Math.abs(hash) % COMMENT_SETS.length;
  return COMMENT_SETS[index];
};

export default function Post() {
  const route = useRoute();
  const id = route.params?.id;
  const username = route.params?.username || "michi_user";
  const imageUrlFromRoute = route.params?.imageUrl;

  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(route.params?.likesCount ?? 342);
  const [sharesCount] = useState(route.params?.sharesCount ?? 14);
  const [comments, setComments] = useState(() => getCommentSetForId(id?.toString() || imageUrlFromRoute));
  const [newComment, setNewComment] = useState("");
  const [imageUrl, setImageUrl] = useState(imageUrlFromRoute || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (imageUrlFromRoute) {
      setImageUrl(imageUrlFromRoute);
      setLoading(false);
      return;
    }

    if (id) {
      setImageUrl(`https://cdn2.thecatapi.com/images/${id}.jpg`);
      setLoading(false);
    } else {
      setImageUrl("https://cdn2.thecatapi.com/images/0.jpg");
      setLoading(false);
    }
  }, [id, imageUrlFromRoute]);

  const handleLikeToggle = () => {
    if (liked) {
      setLiked(false);
      setLikesCount((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikesCount((prev) => prev + 1);
    }
  };

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    const freshComment = {
      id: Date.now().toString(),
      user: "tu_usuario",
      text: newComment.trim()
    };
    setComments((prev) => [...prev, freshComment]);
    setNewComment("");
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000000" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>

      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{username}</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.authorContainer}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150" }}
            style={styles.avatar}
          />
          <Text style={styles.usernameText}>{username}</Text>
        </View>

        {imageUrl && <Image source={{ uri: imageUrl }} style={styles.postImage} />}

        <View style={styles.actionsContainer}>
          <View style={styles.leftActions}>
            <TouchableOpacity onPress={handleLikeToggle} style={styles.actionButton}>
              <View style={styles.iconRow}>
                <Heart size={24} color={liked ? "#FF3040" : "#000000"} fill={liked ? "#FF3040" : "none"} />
                <Text style={styles.iconLabel}>{likesCount}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.iconRow}>
                <MessageCircle size={24} color="#000000" />
                <Text style={styles.iconLabel}>{comments.length}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.iconRow}>
                <Send size={24} color="#000000" />
                <Text style={styles.iconLabel}>{sharesCount}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.likesText}>{likesCount} Me gusta</Text>
          <Text style={styles.captionText}>
            <Text style={styles.usernameBold}>michi_user </Text>
            Miren este increíble gatito que encontré en la API externa de este gran TP! 🚀 #CatAPI
          </Text>
        </View>

        <View style={styles.commentsSection}>
          <Text style={styles.commentsTitle}>Comentarios</Text>
          {comments.map((comment) => (
            <View key={comment.id} style={styles.commentItem}>
              <Text style={styles.commentText}>
                <Text style={styles.usernameBold}>{comment.user} </Text>
                {comment.text}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Agrega un comentario..."
          placeholderTextColor="#999"
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity onPress={handleAddComment} disabled={!newComment.trim()}>
          <Text style={[styles.postCommentButtonText, !newComment.trim() && { opacity: 0.4 }]}>
            Publicar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}