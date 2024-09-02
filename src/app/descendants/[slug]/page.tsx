import prisma from '@/lib/db';
import Link from '../../../../node_modules/next/link';

export default async function SingleDescendant({ params }) {

    const descendants = await prisma.descendants.findUnique({
        where: {
            slug: params.slug,
        },
        include: {
            skills: true,
            levels: true,
            descendantStats: true,
        }
    });

    // const levels = await prisma.descendantLevels.findMany({
    //     include: {
    //         stats: true,
    //     }
    // })

    // const stats = await prisma.descendantStats.findUnique({
    //     where: {
    //         descendantLevels: params.level
    //     }
    // })

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
                            <div className="flex flex-row">
                                <img src={d.descendant_img} alt="" />

                                
                                <div className="flex flex-col">
                                    <h4>Select Level</h4>
                                    <select className='h-auto bg-gray-500'>
                                    {descendants.levels.map((level) => (
                                        <>
                                            <option className='text-black' value={level.level}>{level.level}</option>  
                                        </>
                                    ))}
                                    </select>
                                </div>
                                <div>
                                    {descendants.descendantStats.map((stat) => (
                                        <>
                                            <p>Max HP: {stat.hp_value}</p>
                                            <p>Max Shield: {stat.shield_value}</p>
                                            <p>Max MP: {stat.mp_value}</p>
                                            <p>Defense: {stat.def_value}</p>
                                            <p>Sheield Recovery Out of Combat: {stat.out_of_combat_value}</p>
                                            <p>Shield Recovery In Combat: {stat.in_combat_value}</p>
                                        </>
                                    ))}
                                </div>

                                {/* <div className='flex flex-col'>
                                    {[stats].map((stat) => (
                                        <>
                                            <p>Max HP: {stat.hp_value}</p>
                                            <p>Max Shield: {stat.shield_value}</p>
                                            <p>Max MP: {stat.mp_value}</p>
                                            <p>Defense: {stat.def_value}</p>
                                            <p>Sheield Recovery Out of Combat: {stat.out_of_combat_value}</p>
                                            <p>Shield Recovery In Combat: {stat.in_combat_value}</p>
                                        </>
                                    ))}
                                </div> */}

                            </div>
                            <div className="flex flex-row gap-4">
                                {descendants.skills.map((skill) => (
                                    <>
                                        <div key={skill.id} className='border shadow-md w-1/4 p-4'>
                                            <p>{skill.skill_type}</p>
                                            <p>{skill.skill_name}</p>
                                            <p>{skill.element_type}</p>
                                            <p>{skill.arche_type}</p>
                                            <p>{skill.skill_description}</p>
                                            <div className="w-full flex justify-center ">
                                                <img src={skill.skill_image} alt="" />
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