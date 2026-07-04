import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#E1E1E1",
  },
  statsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 16,
  },
  statBox: {
    alignItems: "center",
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
  editButton: {
    marginTop: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#EFEFEF",
    alignItems: "center",
  },
  editButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#000000",
  },
});
