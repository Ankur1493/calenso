export interface MeetingInfo {
  _id: string;
  user_id: string;
  title: string;
  description: string;
  duration: number;
}

export interface ErrorResponse {
  data?: {
    message?: string;
  };
  error?: string;
}

export interface MeetingFormProps {
  meetingInfo: MeetingInfo;
  setMeetingInfo: React.Dispatch<React.SetStateAction<MeetingInfo>>;
  handleSubmit: () => void;
}

export interface Schedule {
  _id: string;
  DAY: string;
  START_TIME: string;
  END_TIME: string;
  available: boolean;
}

export interface AvailabilityProps {
  availability: {
    availableSchedule: Schedule[];
  };
}

export interface Meeting {
  _id?: string;
  title: string;
  duration: number;
  info: string;
}

export interface Booking {
  _id: string;
  canceled: boolean;
  createdAt: string;
  description: string;
  endTime?: string;
  startTime?: string;
  first_user: string;
  guestUser: string;
  meeting_id: string;
  title: string;
  updatedAt: string;
  event: event;
}

interface event {
  calendarEventId: string;
  meetLink: string;
}
