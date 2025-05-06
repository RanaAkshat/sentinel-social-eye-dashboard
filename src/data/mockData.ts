
export const tweetStats = {
  totalTweets: 24367,
  threatsDetected: 438,
  threatCategories: {
    hateSpeed: 146,
    cyberbullying: 98,
    violenceIncitement: 112,
    publicSafety: 57,
    fakeAccounts: 25
  }
};

export const platformStats = {
  twitter: 9245,
  instagram: 7621,
  facebook: 5109,
  reddit: 2392
};

export const trendData = [
  { date: "May 1", hateSpeed: 18, cyberbullying: 12, violenceIncitement: 15, publicSafety: 7, fakeAccounts: 3 },
  { date: "May 2", hateSpeed: 14, cyberbullying: 14, violenceIncitement: 18, publicSafety: 8, fakeAccounts: 4 },
  { date: "May 3", hateSpeed: 22, cyberbullying: 10, violenceIncitement: 15, publicSafety: 10, fakeAccounts: 5 },
  { date: "May 4", hateSpeed: 17, cyberbullying: 16, violenceIncitement: 13, publicSafety: 7, fakeAccounts: 3 },
  { date: "May 5", hateSpeed: 20, cyberbullying: 9, violenceIncitement: 21, publicSafety: 8, fakeAccounts: 6 },
  { date: "May 6", hateSpeed: 25, cyberbullying: 15, violenceIncitement: 17, publicSafety: 12, fakeAccounts: 4 },
  { date: "May 7", hateSpeed: 30, cyberbullying: 13, violenceIncitement: 9, publicSafety: 5, fakeAccounts: 3 }
];

export const flaggedTweets = [
  {
    id: "1",
    content: "I can't believe how stupid these politicians are. They all deserve to be [censored].",
    username: "@politicalranter45",
    timestamp: "2023-05-06T10:23:14",
    threatType: "hateSpeed",
    confidenceScore: 0.89,
    platform: "twitter"
  },
  {
    id: "2",
    content: "If I see that guy at school tomorrow, he's gonna regret what he said about my sister.",
    username: "@student_jayy",
    timestamp: "2023-05-06T09:45:03",
    threatType: "cyberbullying",
    confidenceScore: 0.94,
    platform: "instagram"
  },
  {
    id: "3",
    content: "Someone should teach those protesters a lesson. I know where they meet up.",
    username: "@truth_seeker88",
    timestamp: "2023-05-06T08:12:56",
    threatType: "violenceIncitement",
    confidenceScore: 0.87,
    platform: "reddit"
  },
  {
    id: "4",
    content: "The bridge on 5th street isn't safe. I noticed cracks forming under the main support.",
    username: "@concerned_citizen",
    timestamp: "2023-05-06T07:30:29",
    threatType: "publicSafety",
    confidenceScore: 0.75,
    platform: "facebook"
  },
  {
    id: "5",
    content: "Every member of that minority group should be deported immediately!",
    username: "@patriot_defender",
    timestamp: "2023-05-06T06:54:11",
    threatType: "hateSpeed",
    confidenceScore: 0.97,
    platform: "twitter"
  },
  {
    id: "6",
    content: "Keep making fun of my weight and see what happens when I find you.",
    username: "@dave_gaming",
    timestamp: "2023-05-05T22:34:05",
    threatType: "cyberbullying",
    confidenceScore: 0.83,
    platform: "instagram"
  },
  {
    id: "7",
    content: "I'm bringing something special to the rally tomorrow. The counter-protesters won't know what hit them.",
    username: "@rally_supporter",
    timestamp: "2023-05-05T21:12:38",
    threatType: "violenceIncitement",
    confidenceScore: 0.92,
    platform: "facebook"
  },
  {
    id: "8",
    content: "There's a gas leak in the apartment building on Main St. I can smell it from the street.",
    username: "@downtown_resident",
    timestamp: "2023-05-05T20:05:22",
    threatType: "publicSafety",
    confidenceScore: 0.88,
    platform: "twitter"
  },
  {
    id: "9",
    content: "Just joined! Follow me for exclusive giveaways! I'll be sharing codes soon with my first 1000 followers!",
    username: "@prize_giver2023",
    timestamp: "2023-05-05T18:45:10",
    threatType: "fakeAccounts",
    confidenceScore: 0.96,
    platform: "twitter"
  }
];

export const recentAlerts = [
  {
    id: "alert1",
    message: "🔴 Hate Speech detected in tweet by @patriot_defender",
    time: "2 minutes ago",
    severity: "high",
    platform: "twitter"
  },
  {
    id: "alert2",
    message: "🟠 Cyberbullying detected in post by @dave_gaming",
    time: "15 minutes ago",
    severity: "medium",
    platform: "instagram"
  },
  {
    id: "alert3",
    message: "🔴 Violence Incitement detected in comment by @rally_supporter",
    time: "34 minutes ago",
    severity: "high",
    platform: "facebook"
  },
  {
    id: "alert4",
    message: "🟡 Public Safety concern detected in post by @downtown_resident",
    time: "45 minutes ago",
    severity: "low",
    platform: "reddit"
  },
  {
    id: "alert5",
    message: "🟣 Fake Account detected: @prize_giver2023",
    time: "50 minutes ago",
    severity: "medium",
    platform: "twitter"
  }
];

export const getThreatTypeLabel = (threatType: string): string => {
  const map: Record<string, string> = {
    hateSpeed: "Hate Speech",
    cyberbullying: "Cyberbullying",
    violenceIncitement: "Incitement to Violence",
    publicSafety: "Public Safety Threat",
    fakeAccounts: "Fake Account"
  };
  return map[threatType] || threatType;
};

export const getThreatTypeColor = (threatType: string): string => {
  const map: Record<string, string> = {
    hateSpeed: "text-threat-hate",
    cyberbullying: "text-threat-cyberbully",
    violenceIncitement: "text-threat-violence",
    publicSafety: "text-threat-safety",
    fakeAccounts: "text-purple-400"
  };
  return map[threatType] || "text-primary";
};

export const getThreatTypeBgColor = (threatType: string): string => {
  const map: Record<string, string> = {
    hateSpeed: "bg-threat-hate/20",
    cyberbullying: "bg-threat-cyberbully/20",
    violenceIncitement: "bg-threat-violence/20",
    publicSafety: "bg-threat-safety/20",
    fakeAccounts: "bg-purple-400/20"
  };
  return map[threatType] || "bg-primary/20";
};

export const getPlatformIcon = (platform: string): string => {
  const map: Record<string, string> = {
    twitter: "X",
    instagram: "IG",
    facebook: "FB",
    reddit: "R"
  };
  return map[platform] || "";
};

export const getPlatformColor = (platform: string): string => {
  const map: Record<string, string> = {
    twitter: "bg-blue-400 text-white",
    instagram: "bg-pink-500 text-white",
    facebook: "bg-blue-600 text-white",
    reddit: "bg-orange-500 text-white"
  };
  return map[platform] || "bg-primary text-white";
};
