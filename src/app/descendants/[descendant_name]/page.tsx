import prisma from '@/lib/db';
import Link from '../../../../node_modules/next/link';

export default async function SingleDescendant({ params }) {

    const descendants = await prisma.descendants.findUnique({
        where: {
            descendant_name: params.descendant_name,
        }
    });

    return (
        <>
            <main className="flex min-h-screen flex-col p-24">
            <Link href={`/descendants`}>Go back</Link>
                {[descendants].map((d) => (
                    <div key={d.id}>
                        <div className="title text-center">
                            <h1>{d.descendant_name}</h1>
                        </div>
                        <div className="descendant-details">
                            <img src={d.descendant_img} alt="" />
                        </div>
                    </div>
                ))}
            </main>
        </>
    )
}