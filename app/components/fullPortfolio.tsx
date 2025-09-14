import styles from "./fullPortfolio.module.css";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";


import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { client } from "@/sanity/lib/client";
const { projectId, dataset } = client.config();

const ART_QUERY = `*[
  _type == "art"
  && defined(slug.current)
]|order(date desc)[0...1000]{_id, title, slug, date, image, mediumType}`;

const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null;

const options = { next: { revalidate: 30 } };

export default async function fullPortfolio() {
    const posts = await client.fetch<SanityDocument[]>(ART_QUERY, {}, options);
    return (
        <div className={styles.portfolioCont}>
                <div className={styles.portfolioList}>
                    {posts.map((art) => (
                        <li key={art._id} className={styles.artItem}>
                            {art.image && art.image.asset && urlFor(art.image) && (
                                <Image
                                    src={urlFor(art.image)?.url() || ""}
                                    alt={art.title}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'contain'
                                    }}
                                />
                            )}
                        </li>
                    ))}
                </div>
        </div>
    );
}