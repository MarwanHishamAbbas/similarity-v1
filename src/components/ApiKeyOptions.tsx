"use client";

import { FC, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/DropDownMenu";
import { Button } from "./ui/Button";
import { Loader2 } from "lucide-react";
import { toast } from "./ui/Toast";
import { createApiKey } from "@/helpers/create-api-key";
import { useRouter } from "next/navigation";

interface ApiKeyOptionsProps {
  apiKeyId: string;
  apiKey: string;
}

const ApiKeyOptions: FC<ApiKeyOptionsProps> = ({ apiKeyId, apiKey }) => {
  const [isCreatingNew, setIsCreatingNew] = useState<boolean>(false);
  const [isRevoking, setisRevoking] = useState<boolean>(false);
  const router = useRouter();
  const createNewApiKey = async () => {
    setIsCreatingNew(true);
    try {
      await revokeApiKey();
      await createApiKey();
      router.refresh();
    } catch (error) {
      toast({
        title: "Error creating new API key",
        message: "Please try again later.",
        type: "error",
      });
    } finally {
      setIsCreatingNew(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={isCreatingNew || isRevoking}>
        <Button variant="ghost" className="flex gap-2 items-center">
          <p>
            {isCreatingNew
              ? "Creating new key"
              : isRevoking
              ? "Revoking key"
              : "Options"}
          </p>
          {isCreatingNew || isRevoking ? (
            <Loader2 className="animate-spin h-4 w-4" />
          ) : null}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => {
            navigator.clipboard.writeText(apiKey);
            toast({
              title: "Copied",
              message: "API key copied to clipboard",
              type: "success",
            });
          }}
        >
          Copy
        </DropdownMenuItem>
        <DropdownMenuItem onClick={createNewApiKey}>
          Create New Key
        </DropdownMenuItem>
        <DropdownMenuItem>Revoke Key</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ApiKeyOptions;
