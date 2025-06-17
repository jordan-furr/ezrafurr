import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { client } from "@/sanity/lib/client";
const { projectId, dataset } = client.config();

const ART_QUERY = `*[
  _type == "art"
  && defined(slug.current)
]|order(date desc)[0...12]{_id, title, slug, date, image, mediumType}`;

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };


export default async function Home() {
  const posts = await client.fetch<SanityDocument[]>(ART_QUERY, {}, options);
  return (
    <main>
      <h1>art</h1>
      <ul>
        {posts.map((art) => (
          <li key={art._id}>
              <h2>{art.title}</h2>
              {art.image && urlFor(art.image) && (
                <Image
                  src={urlFor(art.image)?.width(500).height(300).url() || ""}
                  alt={art.title}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                />
              )}
              <p>{art.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
