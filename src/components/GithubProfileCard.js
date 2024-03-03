import Image from "next/image";
const GithubProfileCard = ({ profile }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
        <Image width={30}
          height={30} src={profile.avatar_url} alt={profile.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{profile.name}</div>
          <p className="text-gray-700 text-base">
            {profile.bio}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {profile.email}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Followers: {profile.followers}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            Following: {profile.following}
          </span>
        </div>
      </div>
    );
  };
  
  export default GithubProfileCard;
  