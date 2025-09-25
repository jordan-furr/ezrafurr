import Link from "next/link";
import Sidebar from "@/app/components/sidebar";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { PublishedAt } from "@/app/components/publishedAt";


export default async function Page() {
    const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

    return (
        <div className="page">
            <div className="sidebarCont">
                <Sidebar />
            </div>
            <div>
                <div className="postsContainer">
                    {posts.map((post) => (
                        <div className="postPrev" key={post._id}>
                            <PublishedAt publishedAt={post?.publishedAt} />
                            <Link href={`/updates/${post?.slug?.current}`}>
                                <div className="postTitle">
                                    {post?.title}
                                </div>
                            </Link>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}