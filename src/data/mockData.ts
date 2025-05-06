
export const tweetStats = {
  totalTweets: 14367,
  threatsDetected: 238,
  threatCategories: {
    hateSpeed: 87,
    cyberbullying: 53,
    violenceIncitement: 65,
    publicSafety: 33
  }
};

export const trendData = [
  { date: "May 1", hateSpeed: 12, cyberbullying: 8, violenceIncitement: 7, publicSafety: 3 },
  { date: "May 2", hateSpeed: 9, cyberbullying: 7, violenceIncitement: 11, publicSafety: 4 },
  { date: "May 3", hateSpeed: 15, cyberbullying: 5, violenceIncitement: 9, publicSafety: 6 },
  { date: "May 4", hateSpeed: 11, cyberbullying: 10, violenceIncitement: 8, publicSafety: 5 },
  { date: "May 5", hateSpeed: 14, cyberbullying: 6, violenceIncitement: 13, publicSafety: 4 },
  { date: "May 6", hateSpeed: 18, cyberbullying: 9, violenceIncitement: 10, publicSafety: 7 },
  { date: "May 7", hateSpeed: 8, cyberbullying: 8, violenceIncitement: 7, publicSafety: 4 }
];

export const flaggedTweets = [
  {
    id: "1",
    content: "I can't believe how stupid these politicians are. They all deserve to be [censored].",
    username: "@politicalranter45",
    timestamp: "2023-05-06T10:23:14",
    threatType: "hateSpeed",
    confidenceScore: 0.89
  },
  {
    id: "2",
    content: "If I see that guy at school tomorrow, he's gonna regret what he said about my sister.",
    username: "@student_jayy",
    timestamp: "2023-05-06T09:45:03",
    threatType: "cyberbullying",
    confidenceScore: 0.94
  },
  {
    id: "3",
    content: "Someone should teach those protesters a lesson. I know where they meet up.",
    username: "@truth_seeker88",
    timestamp: "2023-05-06T08:12:56",
    threatType: "violenceIncitement",
    confidenceScore: 0.87
  },
  {
    id: "4",
    content: "The bridge on 5th street isn't safe. I noticed cracks forming under the main support.",
    username: "@concerned_citizen",
    timestamp: "2023-05-06T07:30:29",
    threatType: "publicSafety",
    confidenceScore: 0.75
  },
  {
    id: "5",
    content: "Every member of that minority group should be deported immediately!",
    username: "@patriot_defender",
    timestamp: "2023-05-06T06:54:11",
    threatType: "hateSpeed",
    confidenceScore: 0.97
  },
  {
    id: "6",
    content: "Keep making fun of my weight and see what happens when I find you.",
    username: "@dave_gaming",
    timestamp: "2023-05-05T22:34:05",
    threatType: "cyberbullying",
    confidenceScore: 0.83
  },
  {
    id: "7",
    content: "I'm bringing something special to the rally tomorrow. The counter-protesters won't know what hit them.",
    username: "@rally_supporter",
    timestamp: "2023-05-05T21:12:38",
    threatType: "violenceIncitement",
    confidenceScore: 0.92
  },
  {
    id: "8",
    content: "There's a gas leak in the apartment building on Main St. I can smell it from the street.",
    username: "@downtown_resident",
    timestamp: "2023-05-05T20:05:22",
    threatType: "publicSafety",
    confidenceScore: 0.88
  }
];

export const recentAlerts = [
  {
    id: "alert1",
    message: "🔴 Hate Speech detected in tweet by @patriot_defender",
    time: "2 minutes ago",
    severity: "high"
  },
  {
    id: "alert2",
    message: "🟠 Cyberbullying detected in tweet by @dave_gaming",
    time: "15 minutes ago",
    severity: "medium"
  },
  {
    id: "alert3",
    message: "🔴 Violence Incitement detected in tweet by @rally_supporter",
    time: "34 minutes ago",
    severity: "high"
  },
  {
    id: "alert4",
    message: "🟡 Public Safety concern detected in tweet by @downtown_resident",
    time: "45 minutes ago",
    severity: "low"
  }
];

export const getThreatTypeLabel = (threatType: string): string => {
  const map: Record<string, string> = {
    hateSpeed: "Hate Speech",
    cyberbullying: "Cyberbullying",
    violenceIncitement: "Incitement to Violence",
    publicSafety: "Public Safety Threat"
  };
  return map[threatType] || threatType;
};

export const getThreatTypeColor = (threatType: string): string => {
  const map: Record<string, string> = {
    hateSpeed: "text-threat-hate",
    cyberbullying: "text-threat-cyberbully",
    violenceIncitement: "text-threat-violence",
    publicSafety: "text-threat-safety"
  };
  return map[threatType] || "text-primary";
};

export const getThreatTypeBgColor = (threatType: string): string => {
  const map: Record<string, string> = {
    hateSpeed: "bg-threat-hate/20",
    cyberbullying: "bg-threat-cyberbully/20",
    violenceIncitement: "bg-threat-violence/20",
    publicSafety: "bg-threat-safety/20"
  };
  return map[threatType] || "bg-primary/20";
};
