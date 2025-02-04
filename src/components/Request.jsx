import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequests } from "../utils/requestSlice";
import { useEffect } from "react";

const Request = () => {
  const requests = useSelector((store) => store.request);
  const dispatch = useDispatch();

  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL+"/request/review/" + status+"/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequests(requests[0]._id))
    } catch (error) {
      console.error(error.message);
    }
  };
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/request/received", {
        withCredentials: true,
      });

      dispatch(addRequests(res.data.connectionRequest));
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;
  if (requests.length === 0) return <h1 className="flex justify-center">No Requests Found</h1>;
  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-4xl">Connection Requests</h1>
      {requests.map((request) => {
        const { firstName, lastName, photoUrl, age, gender, about } =
          request.fromUserId;
        return (
          <div
            className="flex justify-between items-center m-4 p-4 border rounded-lg bg-base-300 w-2/3 mx-auto"
            key={request._id}
          >
            <div>
              <img className="w-20 h-20 " alt="photo" src={photoUrl} />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            <div>
              <button
                className="btn btn-primary mx-2"
                onClick={() => reviewRequest("rejected", requests[0]._id)}
              >
                Reject
              </button>
              <button
                className="btn btn-secondary mx-2"
                onClick={() => reviewRequest("accepted", requests[0]._id)}
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Request;
