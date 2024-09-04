import Link from "../../../node_modules/next/link";
import prisma from '@/lib/db';

export default async function Descendants() {

    const descendants = await prisma.descendants.findMany({
        orderBy: {
            descendant_name: "asc"
        }
    });

    return (
        <>
            <main className="flex min-h-screen flex-col items-center px-24 my-4">
                <div>
                    <h1 className="text-5xl my-6">Descendants</h1>
                </div>

                <ul className="border-t border-b border-black flex flex-row flex-wrap justify-between gap-4">
                    {descendants.map((d) => (
                        <li key={d.id} className="flex items-center justify-between px-5 border rounded-lg shadow-blue-600 shadow-lg hover:scale-105">
                            <Link href={`/descendants/${d.slug}`}>
                                <img src={d.descendant_img} alt="" loading="lazy" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}