import { useDeleteMeetingMutation } from "../slices/meetingsApiSlice";
import { useDispatch } from "react-redux";
import { deleteMeetingId } from "../slices/meetingSlice";
import { useNavigate } from "react-router-dom";

const Delete = ({ id }) => {
  const [deleteMeeting] = useDeleteMeetingMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteMeeting = async () => {
    try {
      await deleteMeeting(id).unwrap();
      dispatch(deleteMeetingId({ id }));
      console.log(`action dispatched id --- ${id}`)
      navigate("/home/event-types");
    } catch (error) {
      console.error("Failed to delete meeting:", error);
    }
  };

  return { handleDeleteMeeting };
};

export default Delete;

