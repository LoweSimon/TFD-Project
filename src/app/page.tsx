import Link from "../../node_modules/next/link";

export default function Home() {

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <Link href="/descendants">
          <div className="card bg-base-100 image-full w-96 shadow-xl">
            <figure>
              <img
                src=""
                alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Descendants</h2>
            </div>
          </div>
        </Link>
      </div>

      
    </main>
  );
}
