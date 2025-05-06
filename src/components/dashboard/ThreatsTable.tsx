
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";
import { 
  flaggedTweets, 
  getThreatTypeLabel, 
  getThreatTypeColor, 
  getThreatTypeBgColor,
  getPlatformIcon,
  getPlatformColor
} from "@/data/mockData";

const ThreatsTable = () => {
  const [tweets, setTweets] = useState<any[]>([]);

  useEffect(() => {
    // Simulate tweets loading one by one for animation effect
    const loadTweets = async () => {
      const loadedTweets: any[] = [];
      for (let i = 0; i < flaggedTweets.length; i++) {
        loadedTweets.push(flaggedTweets[i]);
        setTweets([...loadedTweets]);
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    };

    loadTweets();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-threat-hate" /> 
          Flagged Posts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-auto max-h-[400px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Platform</TableHead>
                <TableHead>Content</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Threat Type</TableHead>
                <TableHead>Confidence</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tweets.map((tweet) => (
                <TableRow 
                  key={tweet.id} 
                  className="animate-fade-in"
                >
                  <TableCell>
                    <Badge className={getPlatformColor(tweet.platform)}>
                      {getPlatformIcon(tweet.platform)}
                    </Badge>
                  </TableCell>
                  <TableCell className="max-w-[250px] truncate">
                    {tweet.content}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {tweet.username}
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className={`${getThreatTypeBgColor(tweet.threatType)} ${getThreatTypeColor(tweet.threatType)}`}
                    >
                      {getThreatTypeLabel(tweet.threatType)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary" 
                          style={{ width: `${tweet.confidenceScore * 100}%` }}
                        />
                      </div>
                      <span className="text-xs whitespace-nowrap">
                        {Math.round(tweet.confidenceScore * 100)}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {formatDate(tweet.timestamp)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThreatsTable;
