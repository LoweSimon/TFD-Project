// import prisma from "@/lib/db"
import Link from "../../../node_modules/next/link"

export default async function Modules() {

    let data = await fetch('https://open.api.nexon.com/static/tfd/meta/en/module.json')
    let modules = await data.json()

    return (
        <>
            <table className='px-24 table mx-auto w-3/4'>
                <thead className='text-xl text-white'>
                    <tr>
                        <th>Module</th>
                        <th>Socket Type</th>
                        <th>Class</th>
                        <th>Tier</th>
                        <th>Module Type</th>
                        <th>Base stats</th>
                    </tr>
                </thead>
                <tbody>
                {modules.map((module) => (
                    <>
                            <tr>
                                <td>
                                    <Link href={`/all-modules/${module.module_id}`}>
                                        <div className='flex items-center gap-3'>
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-20 w-20">
                                                    <div className={`bg-${module.module_tier}`}>
                                                        <img src={module.image_url} alt={module.module_name} />
                                                    </div>
                                                </div>
                                            </div>
                                            <p>{module.module_name}</p>
                                        </div>
                                    </Link>
                                </td>
                                <td>{module.module_socket_type}</td>
                                <td>{module.module_class}</td>
                                <td>{module.module_tier}</td>
                                <td>{module.module_type}</td>
                                {/* {module.module_stat
                                    .filter((stat) => stat.level == 0)
                                    .map((stat) => (
                                        <td>{stat.value}</td>
                                ))} */}
                            </tr>
                    </>
                ))}
                </tbody>
            </table>
        </>
    )

}