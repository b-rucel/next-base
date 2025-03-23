import { Author, BlogMdxFrontmatter, getAllBlogs } from "@/lib/markdown";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function BlogIndexPage() {
  const blogs = await getAllBlogs();
  
  return (
    <div className="w-full mx-auto flex flex-col gap-1 sm:min-h-[91vh] min-h-[88vh] pt-2">
      <div className="mb-7 flex flex-col gap-2">
        <h1 className="sm:text-3xl text-2xl font-extrabold">
          The latest blogs
        </h1>
        <p className="text-muted-foreground sm:text-[16.5px] text-[14.5px]">
          All the latest blogs and news, straight from the team.
        </p>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4 mb-5">
        {blogs.map((blog) => (
          <BlogCard {...blog} slug={blog.slug} key={blog.slug} />
        ))}
      </div>
    </div>
  );
}

function BlogCard({
  date,
  title,
  description,
  slug,
  cover,
  authors,
}: BlogMdxFrontmatter & { slug: string }) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="flex flex-col gap-2 items-start border rounded-md py-5 px-3 min-h-[400px]"
    >
      <h3 className="text-md font-semibold -mt-1 pr-7">{title}</h3>
      <div className="w-full">
        <Image
          src={cover}
          alt={title}
          width={400}
          height={150}
          quality={80}
          className="w-full rounded-md object-cover h-[180px] border"
        />
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex items-center justify-between w-full mt-auto">
        <p className="text-[13px] text-muted-foreground">
          Published on {formatDate(date)}
        </p>
        <AvatarGroup users={authors} />
      </div>
    </Link>
  );
}

function AvatarGroup({ users }: { users: Author[] }) {
  return (
    <div className="flex -space-x-2">
      {users.slice(0, 2).map((user) => (
        <Avatar key={user.username} className="h-7 w-7 border-2 border-background">
          <AvatarImage src={user.avatar} />
          <AvatarFallback>
            {user.username.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      ))}
      {users.length > 2 && (
        <Avatar className="h-7 w-7 border-2 border-background">
          <AvatarFallback>+{users.length - 2}</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}