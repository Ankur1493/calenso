import { useDeleteMeetingMutation } from "../slices/meetingsApiSlice";
import { useNavigate } from "react-router-dom";

const Delete = ({ id }) => {
  const [deleteMeeting] = useDeleteMeetingMutation();
  const navigate = useNavigate();

  const handleDeleteMeeting = async () => {
    try {
      await deleteMeeting(id).unwrap();
      navigate("/home/event-types");
    } catch (error) {
      console.error("Failed to delete meeting:", error);
    }
  };
  return { handleDeleteMeeting };
};

export default Delete;
