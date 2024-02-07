import { sortByDate } from "../utils/helper";
import Tweet from "./Tweet";

function Tweets({ tweets }) {
  const tweetList =
    tweets.length > 0 ? (
      sortByDate(tweets).map((tweet) => {
        return <Tweet key={tweet.id} tweet={tweet} />;
      })
    ) : (
      <div>
        <p className="p-4">Aucun tweet</p>
      </div>
    );

  return <div className="divide-y divide-[#2f3336]">{tweetList}</div>;
}

export default Tweets;
