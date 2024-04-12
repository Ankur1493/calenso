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
  accessToken?: string;
}

export const createEvent = async ({
  title,
  description,
  firstUser,
  guestUser,
  startTime,
  endTime,
  accessToken,
}: createProps) => {
  try {
    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({ access_token: accessToken });
    const response = await calendar.events.insert({
      auth: oauth2Client,
      calendarId: "primary",
      requestBody: {
        summary: title,
        description,
        start: {
          dateTime: startTime.toISOString(),
          timeZone: "Asia/Kolkata",
        },
        end: {
          dateTime: endTime.toISOString(),
          timeZone: "Asia/Kolkata",
        },
        attendees: [{ email: firstUser }, { email: guestUser }],
        conferenceData: {
          createRequest: {
            requestId: uuid(),
          },
        },
        colorId: "3",

        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 24 * 60 },
            { method: "popup", minutes: 10 },
          ],
        },
      },
      sendUpdates: "all",
      conferenceDataVersion: 1,
    });

    const meetLink = response?.data?.conferenceData?.entryPoints?.find(
      (entry) => entry?.entryPointType === "video"
    )?.uri;
    const eventId = response?.data.id;
    return {
      calendarEventId: eventId,
      meetLink,
    };
  } catch (error) {
    console.error("Error creating event:", error);
    return false;
  }
};
export const deleteEvent = async (eventId: string, accessToken: string) => {
  try {
    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({ access_token: accessToken });

    const response = await calendar.events.delete({
      calendarId: "primary",
      auth: oauth2Client,
      eventId: eventId,
      sendUpdates: "all",
    });

    if (!response) {
      throw new Error("Can't connect to calendar");
    }
    return true;
  } catch (error) {
    console.error("Error deleting event:", error);
    return false;
  }
};
