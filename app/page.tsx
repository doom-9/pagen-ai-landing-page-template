import Landing from "@/templates/shadcn/pages/landing";
import { Metadata } from "next";
import { page } from "@/data/demo";

export const runtime = "edge";

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEB_URL}/`,
    },
    title: "一键职达-帮你点亮求职之路"
  };
}

export default async function () {
  return <Landing page={page} />;
}
