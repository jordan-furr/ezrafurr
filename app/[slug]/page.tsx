import { sanityFetch } from "@/sanity/lib/live";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { data: art } = await sanityFetch({
        query: `*[_type == "art"&& slug.current == $slug][0] {
        _id, title, slug, date, image, mediumType, body, price}`,
        params: await params,
    });

    if (!art) {
        notFound();
    }

    return (
        <main className="artPage">
            <div className="artCont">
                <article className="artItem">
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
                    <div className="titleContact">
                        <div className="artTitle">
                            {art?.title ?? "Untitled"}
                        </div>

                        <Link href={"mailto:georgedfurr@gmail.com"}>
                        <p className="under-hov contact">Contact</p>
                        </Link>

                    </div>

                    <div className="infoLine">
                        <span>{art?.date ?? null}</span>
                        <span>|</span>
                        <span>{art?.mediumType ?? null}</span>
                    </div>
                    <div className="aboutCont">
                        {art?.body ?? null}
                    </div>
                    <div className="priceCont">
                        <span>Price:</span>
                        <span>$</span>
                        <span>{art?.price ?? "Unlisted"}</span>

                    </div>

                </article>
                <Link href="/" className="under-hov">&larr; Return to gallery</Link>
            </div>
        </main>
    );
}