type StatusProps = {
  status: "loading" | "success" | "error";
};
export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loa ding...";
  } else if (props.status === "success") {
    message = "Data fected succesflully";
  } else if (props.status === "error") {
    message = "Error fetchind data";
  }
  return (
    <div>
      <h2> Status - {message}</h2>
    </div>
  );
};
