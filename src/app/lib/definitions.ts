import { z } from "zod";

export const SignupFormSchema = z.object({
  username: z.string().trim(),
  email: z.string().email({ message: "Invalid email value" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 character long." })
    .trim(),
});

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email value" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 character long." })
    .trim(),
});

export type SignupFormState =
  | {
      errors?: {
        username?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export const PostFormSchema = z.object({
  title: z.string().trim().min(1, { message: "Title must not be empty." }),
  content: z
    .string()
    .trim()
    .min(1, { message: "Content field cannot be empty." }),
  is_published: z.preprocess((value) => {
    if (value == "on") {
      return "true";
    }
    return "false";
  }, z.string()),
});

export const UpdatePostFormSchema = z.object({
  title: z.string().trim().min(1, { message: "Title must not be empty." }),
  content: z
    .string()
    .trim()
    .min(1, { message: "Content field cannot be empty." }),
  is_published: z.preprocess((value) => {
    if (value == "on") {
      return "true";
    }
    return "false";
  }, z.string()),
  id: z.preprocess((value) => {
    if (typeof value != "string") {
      return -1;
    }
    return parseInt(value);
  }, z.number()),
});

export type PostFormState =
  | {
      errors?: {
        title?: string[];
        content?: string[];
        is_published?: string[];
      };
      message?: string;
    }
  | undefined;
export type LoginFormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type ValidationError = {
  location: string;
  msg: string;
  path: string;
  type: string;
  value: string;
};

export type SessionPayload = {
  email: string;
  role: string;
  token: string;
  username: string | null;
  expiresAt: Date;
};

export type User = {
  email: string;
  role: string;
  username: string | null;
  token: string;
};

export type KPI = {
  label: string;
  value: string | number;
};

export type Event = {
  type: string;
  subject: string;
  verb: string;
  predicate: string;
  time: string;
  post_id: number;
};

export type GraphData = {
  name: string;
  total: number;
  published: number;
};

export type Post = {
  id: number;
  author_id: number;
  title: string;
  content: string;
  is_published: boolean;
  created_at: string;
  last_edited: string;
  author: { email: string; username: string | null };
};

export type Comment = {
  id: number;
  post_id: number;
  user_id: number;
  comment: string;
  created_at: string;
  updated_at: string;
  user: {
    username: string | null;
    email: string;
  };
};

export interface PostAndComments extends Post {
  comments: Comment[];
}

export type Profile = {
  id: number;
  email: string;
  username: string | null;
  role: string;
  created_at: string;
  posts: number;
};
