export const submitForm = async (input) => {
    const formData = new FormData(input);
    formData.append("access_key", "10ed34e2-a44a-4104-8102-d2ee689da969");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
    });
    return await res.json()
}