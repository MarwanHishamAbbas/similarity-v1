import { ApiKey } from "@prisma/client";
import { type ZodIssue } from "zod";

export interface CreateApiData {
  createdApiKey: ApiKey;
  error: string | ZodIssue[] | null;
}

export interface RevokeApiData {
  error: string | ZodIssue[] | null;
  success: boolean;
}
