import { headers } from "../../../../node_modules/next/headers"


export default async function SingleModule() {

    const headerList = headers();
    const pathname = headerList.get("x-current-path");
    const identifier = pathname.split("/");
    const id = identifier[2];

    let data = await fetch('https://open.api.nexon.com/static/tfd/meta/en/module.json')
    let modules = await data.json()

    return (
            <div>
                {modules
                    .filter((d) => d.module_id == id)
                    .map((d) => (
                        <>
                            <p>
                                {d.module_name}
                            </p>
                            <table>
                                <thead>
                                    <tr>
                                        {d.module_stat.map((stat) => (
                                            <td>{stat.level}</td>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {d.module_stat
                                        .map((stat) => (
                                            <td>{stat.value}</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </>
                ))}
            </div>
    )
}