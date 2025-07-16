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
]|order(date desc)[0...12]{_id, title, slug, date, image, mediumType}`;

const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null;

const options = { next: { revalidate: 30 } };

export default async function fullPortfolio() {
    const posts = await client.fetch<SanityDocument[]>(ART_QUERY, {}, options);
    return (
        <div className={styles.portfolioCont}>

            <ul className={styles.scrollTrack}>
                {posts.map((art) => (
                    <li key={art._id} className={styles.scrollItem}>
                        {art.image && urlFor(art.image) && (
                            <Image
                                src={urlFor(art.image)?.url() || ""}
                                alt={art.title}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{
                                    width: 'clamp(280px, 90vw, 620px)',
                                    height: 'auto',
                                    objectFit: 'contain'
                                }}
                            />
                        )}
                        <p className={styles.artTitle}>{art.title}</p>
                        <div className={styles.infoLine}>
                            {art.date && <p>{art.date}</p>}
                            {art.date && art.mediumType && <span>|</span>}
                            {art.mediumType && <p>{art.mediumType}</p>}
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    );
}