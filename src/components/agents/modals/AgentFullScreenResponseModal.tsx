import { useEffect } from "react";
import { Copy, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MarkdownRenderer } from "../MarkdownRenderer";
import IncubyteLeaf from "@/components/icons/incubyteLeaf";

interface FullScreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string | null;
  onCopy: () => void;
  title?: string;
}

export const AgentFullScreenResponseModal = ({
  isOpen,
  onClose,
  content,
  onCopy,
  title = "Agent Response",
}: FullScreenModalProps) => {
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-[95vw] h-[95vh] bg-white rounded-lg shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <IncubyteLeaf />
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onCopy}
              className="border-secondary/20 hover:bg-secondary/5"
            >
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
            <Button variant="outline" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 p-6">
          <ScrollArea className="h-full w-full border rounded-md">
            <div className="p-6">
              {content && <MarkdownRenderer content={content} />}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};
