import prisma from '@/lib/db';
import Link from '../../../../node_modules/next/link';

export default async function SingleDescendant({ params }) {

    const descendants = await prisma.descendants.findUnique({
        where: {
            slug: params.slug,
        },
        include: {
            skills: true,
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
                            <div className="flex flex-row gap-4">
                                {descendants.skills.map((d) => (
                                    <>
                                        <div className='border shadow-md w-1/4 p-4'>
                                            <p>{d.skill_type}</p>
                                            <p>{d.skill_name}</p>
                                            <p>{d.element_type}</p>
                                            <p>{d.arche_type}</p>
                                            <p>{d.skill_description}</p>
                                            <div className="w-full flex justify-center">
                                                <img src={d.skill_image} alt="" />
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </>
    )
}