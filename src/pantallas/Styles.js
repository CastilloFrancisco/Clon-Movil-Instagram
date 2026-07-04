import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  listContent: {
    paddingBottom: 24,
    backgroundColor: "#FFFFFF",
  },
  columnWrapper: {
    justifyContent: "flex-start",
  },
  headerLayoutWrapper: {
    paddingTop: 4,
    paddingBottom: 8,
    backgroundColor: "#FFFFFF",
  },
  highlightsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  highlightItem: {
    alignItems: "center",
    marginRight: 14,
  },
  highlightRing: {
    width: 66,
    height: 66,
    borderRadius: 33,
    borderWidth: 1.2,
    borderColor: "#DDDDDD",
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  highlightImage: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#E1E1E1",
  },
  highlightText: {
    marginTop: 6,
    fontSize: 12,
    color: "#262626",
    maxWidth: 68,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
    paddingBottom: 8,
    marginTop: 8,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: "#DBDBDB",
    backgroundColor: "#FFFFFF",
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 6,
  },
  activeTabButton: {
    borderTopWidth: 2,
    borderTopColor: "#000000",
  },
  gridItemContainer: {
    margin: 1,
    backgroundColor: "#F5F5F5",
    overflow: "hidden",
  },
  gridImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    backgroundColor: "#EDEDED",
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
