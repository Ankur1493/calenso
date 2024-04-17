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
