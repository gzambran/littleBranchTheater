import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
  aspectRatio?: "16:9" | "4:3" | "1:1";
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title = "YouTube video player",
  className = "",
  aspectRatio = "16:9",
}) => {
  // Calculate padding based on aspect ratio
  const getPaddingBottom = () => {
    switch (aspectRatio) {
      case "4:3":
        return "75%"; // 4:3 aspect ratio
      case "1:1":
        return "100%"; // 1:1 aspect ratio
      case "16:9":
      default:
        return "56.25%"; // 16:9 aspect ratio
    }
  };

  return (
    <div 
      className={`relative w-full ${className}`} 
      style={{ paddingBottom: getPaddingBottom() }}
    >
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;