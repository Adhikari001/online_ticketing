import useAuthenticatedPerson from "../features/person/useAuthenticatedPerson";

export default function UserAvatar() {
  const { person, isLoading, isError } = useAuthenticatedPerson();

  const { firstName, lastName } = person;
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;
  return (
    <div className="flex gap-5 items-center font-medium text-l text-gray-600">
      <img
        className="block w-8 h-8 object-cover object-center rounded-full outline outline-2 outline-gray-100"
        src="/default-user.jpg"
        alt="Avatar"
      />
      <span>
        {firstName} {lastName}
      </span>
    </div>
  );
}
