# Calenso 
is an Indian open-source alternative platform for calendly and cal. It is a scheduling infrastructure, which enables you to create bookings and appointments, according to the availability set by the user. You can connect your google calendar with calenso and we will take care of everything from creating an event in your calendar to sending you reminder emails for the meeting.

Calenso is a comprehensive scheduling tool that allows users to connect
their Google Calendar, set up their availability dynamically, and
generate a public page for booking appointments. This project included
a fully functional backend and an intuitive user interface.

## Tech stack used to build Calenso
- Typescript
- React
- Node
- Express
- Mongo DB
- Passport (for google-oauth)
- zod (for data validation)
- Redux Toolkit
- Redux Toolkit Query

Calenso is an application similar to cal.com, developed in collaboration
with a friend [Udit](https://github.com/udit063) who designed the UI. My primary responsibilities included:
- Backend Development: Created from scratch using Node.js and
Express, with MongoDB as the database and Mongoose as the ORM.
- State Management: Managed state using Redux Toolkit and handled
data querying/manipulation with RTK Query on the frontend.
- Google Calendar Integration: Implemented user authentication and
calendar integration using the Passport library.
