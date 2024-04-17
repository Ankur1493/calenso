interface MeetingTime {
  startTime: string;
}

function getMeetingTimeStatus(meetingStartTime: MeetingTime) {
  const now = new Date().getTime();
  //@ts-ignore
  const startTime = new Date(meetingStartTime).getTime();
  const timeDifference = startTime - now;

  if (timeDifference < 0) {
    return "Past meeting";
  }

  let timeLeft = timeDifference / 1000;
  const days = Math.floor(timeLeft / (3600 * 24));
  timeLeft -= days * 3600 * 24;
  const hours = Math.floor(timeLeft / 3600);
  timeLeft -= hours * 3600;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = Math.floor(timeLeft % 60);

  let message = "Meeting starts in ";
  if (days > 0) {
    message += `${days} day${days > 1 ? "s" : ""} `;
  }
  if (hours > 0) {
    message += `${hours} hour${hours > 1 ? "s" : ""} `;
  }
  if (minutes > 0 && days === 0) {
    message += `${minutes} minute${minutes > 1 ? "s" : ""} `;
  }
  if (seconds > 0 && hours === 0 && days === 0) {
    message += `${seconds} second${seconds > 1 ? "s" : ""} `;
  }
  return message.trim();
}

export default getMeetingTimeStatus;
