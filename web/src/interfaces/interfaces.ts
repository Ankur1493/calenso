export interface MeetingInfo {
  title: string;
  description: string;
  duration: number;
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
