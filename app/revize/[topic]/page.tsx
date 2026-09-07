import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicPage } from "@/components/topic-page";
import { findTopic, topicsFor } from "@/lib/topics";

const FIELD = "revize";

export function generateStaticParams() {
  return topicsFor(FIELD).map((t) => ({ topic: t.slug }));
}

export const dynamicParams = false;

export function generateMetadata({
  params,
}: {
  params: { topic: string };
}): Metadata {
  const topic = findTopic(FIELD, params.topic);
  if (!topic) return {};
  return { title: topic.title, description: topic.description };
}

export default function Page({ params }: { params: { topic: string } }) {
  const topic = findTopic(FIELD, params.topic);
  if (!topic) notFound();
  return <TopicPage topic={topic} />;
}
