import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: "#E1E1E1",
  },
  statsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 12,
    paddingTop: 6,
  },
  statBox: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 4,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000000",
  },
  statLabel: {
    fontSize: 12,
    color: "#8E8E8E",
    marginTop: 2,
  },
  bioContainer: {
    marginTop: 12,
  },
  nameText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000000",
  },
  bioText: {
    fontSize: 13,
    color: "#262626",
    marginTop: 4,
  },
  buttonsRow: {
    flexDirection: "row",
    marginTop: 12,
  },
  editButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    marginRight: 8,
  },
  editButtonLast: {
    marginRight: 0,
  },
  editButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#000000",
  },
});
