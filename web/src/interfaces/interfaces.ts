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
