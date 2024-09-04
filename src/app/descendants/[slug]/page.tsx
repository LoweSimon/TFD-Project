import prisma from '@/lib/db';
import Link from '../../../../node_modules/next/link';
import LevelSelector from './../../components/levelSelector';

export default async function SingleDescendant({ params }) {

const descendants = await prisma.descendants.findUnique({
    where: {
        slug: params.slug,
    },
    include: {
        skills: true,
        levels: {
            include: {
                stats: true,
            }
        },
        
    }
    
});


return (
    <>
        <main className="flex min-h-screen flex-col px-24 my-4">
            {[descendants].map((d) => (
                <div key={d.id}>
                    <div className="title text-center">
                        <h1 className="text-5xl my-6">{d.descendant_name}</h1>
                    </div>
                    <div className="descendant-details mt-12">
                        <div className="flex sm:flex-row flex-col">
                            <div className="img-container w-1/4 h-full">
                                <img src={d.descendant_img} alt="" className='shadow-lg shadow-blue-600' />
                            </div>

                            <LevelSelector descendants={descendants} />
                            
                        </div>


                        <div className="flex flex-row flex-wrap justify-between w-full mt-4">
                            {descendants.skills.map((skill) => (
                                <>
                                    <div key={skill.id} className='border shadow-lg shadow-blue-600 w-1/6 h-fit justify-between p-4'>
                                        <p className='mb-2'>Skill Type: <strong>{skill.skill_type}</strong></p>
                                        <p className='mb-2'>Skill Name: <strong>{skill.skill_name}</strong></p>
                                        <p className='mb-2'>Element Type: <strong>{skill.element_type}</strong></p>
                                        <p className='mb-2'>Arche Type: <strong>{skill.arche_type}</strong></p>
                                        <p className='mb-2'>Skill Description: <strong>{skill.skill_description}</strong></p>
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