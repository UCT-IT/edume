import Link from "next/link";

type TextFormat = {
  content: string;
  customHrefs: (string | undefined)[];
};

export function formatContent({ content, customHrefs }: TextFormat) {
  const markupRegex = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = content.split(markupRegex);
  const formattedContent = parts.map((part, index) => {
    if (index % 4 === 0) {
      // Regular text
      return <span key={index}>{part}</span>;
    } else if (index % 4 === 1) {
      // Bold text
      return (
        <span key={index}>
          <strong className="">{part}</strong>
        </span>
      );
    } else if (index % 4 === 2) {
      // Link text
      const linkIndex = Math.floor(index / 4);
      const linkUrl = customHrefs[linkIndex];
      if (linkUrl) {
        return (
          <span key={index}>
            <Link
              href={linkUrl}
              className="text-blue-500 hover:text-black transition-all"
            >
              {part}
            </Link>
          </span>
        );
      } else {
        return <span key={index}>{part}</span>;
      }
    } else {
      // Link URL
      return null;
    }
  });

  return formattedContent;
}
