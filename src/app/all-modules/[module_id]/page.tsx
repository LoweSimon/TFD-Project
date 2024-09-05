export default async function SingleModule({ module }) {

    let data = await fetch('https://open.api.nexon.com/static/tfd/meta/en/module.json?module_id=251001001')
    let modules = await data.json()

    return (
        <>
            {modules.map((d) => (
                <p>
                    {d.module_name}
                </p>
            ))}
        </>
    )
}