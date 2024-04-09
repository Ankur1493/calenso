import { google } from "googleapis";
import { v4 as uuid } from "uuid";

const calendar = google.calendar({
  version: "v3",
  auth: process.env.API_KEY,
});

interface createProps {
  title: string;
  description: string;
  firstUser: string;
  guestUser: string;
  startTime: Date;
  endTime: Date;
  userAccessToken: string;
}

export const createEvent = async ({ title, description, firstUser, guestUser, startTime, endTime, userAccessToken }: createProps) => {
  try {
    console.log(userAccessToken)
    console.log(firstUser)
    const response = await calendar.events.insert({
      calendarId: "primary",
      auth: userAccessToken,
      requestBody: {
        summary: title,
        description,
        start: {
          dateTime: startTime.toISOString(),
          timeZone: 'Asia/Kolkata'
        },
        end: {
          dateTime: endTime.toISOString(),
          timeZone: 'Asia/Kolkata'
        },
        attendees: [
          { email: firstUser },
          { email: guestUser }
        ],
        conferenceData: {
          createRequest: {
            requestId: uuid()
          }
        },
        reminders: {
          useDefault: false,
          overrides: [
            { method: 'email', minutes: 24 * 60 },
            { method: 'popup', minutes: 10 },
          ],
        },
      },
      sendUpdates: "all",
    });

    console.log("failed to get response")
    const meetLink = response?.data?.conferenceData?.entryPoints?.find(entry => entry?.entryPointType === 'video')?.uri;
    const eventId = response?.data.id;
    console.log('Google Meet link:', meetLink);
    return eventId;
  } catch (error) {
    console.error('Error creating event:', error);
    return false;
  }
};
export const deleteEvent = async (eventId: string) => {
  try {
    const response = await calendar.events.delete({
      calendarId: "primary",
      eventId: eventId,
      sendUpdates: "all"
    });

    if (!response) {
      throw new Error("Can't connect to calendar");
    }

    console.log("Event deleted successfully");

    return true;
  } catch (error) {
    console.error("Error deleting event:", error);
    return false;
  }
};

