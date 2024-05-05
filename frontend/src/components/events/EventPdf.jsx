import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  image: {
    marginVertical: 50,
    marginHorizontal: 50,
  },
});

const EventPdf = ({ event }) => (
  <Document>
    <Page size="A4">
      <Text>eventTitle : {event.eventTitle}</Text>
      <Text>eventphoto: {event.photo}</Text>
      <Text>startDate: {event.startDate}</Text>
      <Text>startTime: {event.startTime}</Text>
      <Text>description: {event.description}</Text>
      <Text>eventType: {event.eventType}</Text>
      <Text>location: {event.location}</Text>
    </Page>
  </Document>
);

export default EventPdf;
