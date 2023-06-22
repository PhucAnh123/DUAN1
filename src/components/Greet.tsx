type GreetProps = {
  name: string;
  messageCount: number;
  isLogged: boolean;
};
export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLogged
          ? `Welcome ${props.name}  You have ${props.messageCount} unrared message`
          : "Welcome Anh Phuc"}
      </h2>
    </div>
  );
};
