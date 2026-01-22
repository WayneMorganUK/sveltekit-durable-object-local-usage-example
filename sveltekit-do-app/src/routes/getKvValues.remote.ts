import { query, getRequestEvent } from "$app/server";

export const getKvValues = query(async () => {
    const event = getRequestEvent();
    await event.platform!.env.EXAMPLE_KV.put("my_key", "Hello");
    const kv_value_before = await event.platform?.env?.EXAMPLE_KV.get("my_key");

    const myDo = event.platform!.env.MY_DO;

    const doId = myDo.idFromName('my-do-name');
    const doObj = myDo.get(doId);
    const doResp = await doObj.fetch('http://0.0.0.0');
    const doRespText = await doResp.text();

    const kv_value_after = await event.platform?.env?.EXAMPLE_KV.get("my_key");


    return {
        posts:
        {
            text: doRespText,
            kv_value_before,
            kv_value_after
        }
    };

})