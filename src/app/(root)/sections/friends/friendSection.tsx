import CardFriend from "@/components/shared/cardFriend";
import { getFriends } from "@/services/friend.service";

const FriendSection = async () => {
  const { data } = await getFriends();

  return (
    <section>
      <h3 className="text-2xl font-semibold">Friends</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {data.map((friend: any) => (
          <CardFriend key={data.id} friend={friend} />
        ))}
      </div>
    </section>
  );
};

export default FriendSection;
