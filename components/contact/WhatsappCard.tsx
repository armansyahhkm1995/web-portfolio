import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function WhatsappCard() {
  return (
    <div
      className="
      flex
      flex-col
      gap-5
      rounded-2xl
      bg-black/20
      p-6
    "
    >
      <div>
        <h3 className="display-xs text-left">Need immediate assistance?</h3>

        <p className="body-md mt-2 text-muted-foreground">
          Chat directly with our team via WhatsApp.
        </p>
      </div>

      <a
        href="https://wa.me/62xxxxxxxx"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <Button className="bg-green-500 text-white">
          <MessageCircle className="mr-2 size-5" />
          Chat via WhatsApp
        </Button>
      </a>
    </div>
  );
}
