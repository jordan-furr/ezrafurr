import { PortableText } from "next-sanity";
import { POST_QUERY } from "@/sanity/lib/queries";
import { PublishedAt } from "@/app/components/publishedAt";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { notFound } from "next/navigation";
import Link from "next/link";
import Sidebar from "@/app/components/sidebar";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { data: post } = await sanityFetch({
        query: POST_QUERY,
        params: await params,
    });

    if (!post) {
        notFound();
    }

    return (
        <div className="page">
            <div className="sidebarCont">
                <Sidebar />
            </div>
            <div className="mb1">
                {post.mainImage ? (
                    <Image
                        src={urlFor(post.mainImage).url()}
                        width={0}
                        height={0}
                        sizes="100%"
                        style={{
                            width: '50%',
                            height: 'auto',
                            objectFit: 'contain'
                        }}
                        alt={post?.mainImage?.alt || post?.title || ''}
                    />
                ) : null}
            </div>
            <div className="mb4">{post?.title}</div>
            <PublishedAt publishedAt={post?.publishedAt} />
            <div className="mt4 mb4">
                {post.body ? (
                    <PortableText value={post.body} />
                ) : null}
            </div>
            <Link href="/updates">&larr; Return to posts</Link>
        </div>
    );
}