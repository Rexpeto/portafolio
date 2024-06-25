import Image from "next/image";
import Link from "next/link";

const CardFriend = ({ friend }: { friend: any }) => {
  return (
    <Link
      href={friend.attributes.website ?? "#"}
      className="flex items-center gap-6 p-4 rounded-xl border border-gray-600 group shadow-sm hover:border-gray-400 hover:shadow-gray-700 transition duration-150"
      target="_blank"
    >
      <Image
        src={friend.attributes.profile.data.attributes.url}
        alt={friend.attributes.profile.data.attributes.alternativeText}
        width={50}
        height={50}
      />

      <div>
        <h4 className="text-lg font-bold">{friend.attributes.Name}</h4>
        <p>{friend.attributes.profession}</p>
      </div>
    </Link>
  );
};

export default CardFriend;
