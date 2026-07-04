import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  usernameText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000",
  },
  postImage: {
    width: "100%",
    height: 320,
    resizeMode: "cover",
  },
  actionsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  leftActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionButton: {
    marginRight: 16,
  },
  infoContainer: {
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  likesText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 6,
  },
  captionText: {
    fontSize: 14,
    color: "#262626",
  },
  usernameBold: {
    fontWeight: "700",
    color: "#000000",
  },
  commentsSection: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
  },
  commentsTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 8,
  },
  commentItem: {
    paddingVertical: 4,
  },
  commentText: {
    fontSize: 13,
    color: "#262626",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 0.5,
    borderTopColor: "#DBDBDB",
    backgroundColor: "#FFFFFF",
  },
  textInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    marginRight: 10,
  },
  postCommentButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0095F6",
  },
});
