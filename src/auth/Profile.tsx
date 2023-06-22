export type ProfileProps = {
  name: string;
};

export const Profile = ({ name }: ProfileProps) => {
  return <div>Private Profile Compoments Name is {name}</div>;
};
