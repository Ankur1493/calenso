import { google } from "googleapis";
import { v4 as uuid } from "uuid";

const calendar = google.calendar({
  version: "v3",
  auth: process.env.API_KEY,
});

export const createEvent = async (body) => {
  try {
    const { title, attendees, description, startTime, endTime } = body;

    const response = await calendar.events.insert({
      calendarId: "primary",
      requestBody: {
        summary: title,
        description,
        attendees: [...attendees],
        start: {
          dateTime: startTime,
          timeZone: 'Asia/Kolkata'
        },
        end: {
          dateTime: endTime,
          timeZone: 'Asia/Kolkata'
        },
        conferenceData: {
          createRequest: {
            requestId: uuid()
          }
        },
        reminders: {
          useDefault: false,
          overrides: [
            { method: 'email', 'minutes': 24 * 60 },
            { method: 'popup', 'minutes': 10 },
          ],
        },
      }
    });
    if (!response) {
      throw new Error("Can't connect to calendar")
    }
    const meetLink = response?.data?.conferenceData?.entryPoints?.find(entry => entry?.entryPointType === 'video')?.uri;
    const eventId = response.data.id;
    console.log('Google Meet link:', meetLink);
    return eventId;
  } catch (error) {
    console.error('Error creating event:', error);
    return error;
  }
};

export const deleteEvent = async (eventId) => {
  try {
    const response = await calendar.events.delete({
      calendarId: "primary",
      eventId: eventId,
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

