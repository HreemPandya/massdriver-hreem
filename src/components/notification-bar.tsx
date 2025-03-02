import Link from "next/link"

export default function NotificationBar() {
  return (
    <div className="bg-primary text-white py-3 px-4 text-center">
      <p className="text-sm md:text-base">
        Take a look at our latest blog post!{" "}
        <Link href="#" className="underline font-medium">
          The Case for Abstractions in IaC
        </Link>
      </p>
    </div>
  )
}

