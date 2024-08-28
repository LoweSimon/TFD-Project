import Link from "../../../node_modules/next/link";
import prisma from '@/lib/db';

export default async function Descendants() {

    const descendants = await prisma.descendants.findMany();

    return (
        <>
            <main className="flex min-h-screen flex-col items-center p-24">
                <Link href={`/`}>Go back</Link>
                <div>
                    <h1>Descendants</h1>
                </div>

                <ul className="border-t border-b border-black flex flex-row">
                    {descendants.map((d) => (
                        <li key={d.id} className="flex items-center justify-between px-5">
                            <Link href={`/descendants/${d.descendant_name}`}>
                                <h2>{d.descendant_name}</h2>
                                <img src={d.descendant_img} alt="" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}